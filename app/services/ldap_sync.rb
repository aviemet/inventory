class LdapSync
  attr_reader :people, :groups, :managers, :connection

  def initialize(ldap)
    @ldap = ldap
    @managers = {}
    @people = []
    @groups = []
    connect
  end

  def connect
    @connection = Net::LDAP.new({
      host: @ldap.host,
      port: @ldap.port,
      auth: {
        method: :simple,
        username: "#{@ldap.username}@#{@ldap.domain}",
        password: @ldap.password,
      }
    })

    if !@connection
      raise StandardError
    end
  end

  def sync
    scrape
    save
  end

  def scrape
    return if !@connection

    @connection.search(base: @ldap.tree_base) do |entry|
      return unless entry[:objectclass].include?("user")

      person = person_from_entry
      
      username = entry[:samaccountname]
      email = entry[:mail]
      phone = entry[:telephonenumber]
      
      groups = entry[:memberof].map{ |group|
        match = group.match(/CN=(\w+),/)
        if(!match.nil? && match.length > 1)
          match[1]
        end
      }

      if entry[:manager]
        entry[:manager].each{ |mgr|
          match = mgr.match(/CN=([\w\s]+),/)
          if(!match.nil? && match.length > 1)
            name = match[1]
            @managers[name] ||= []
            @managers[name].push person.guid
          end
        }
      end

      @people.push person
    end
  end

  def save
    save_people
    update_manager_data
  end

  private

  def person_from_entry(entry)
    guid = GuidConverter::unpack_guid(entry[:objectguid].first)
    person = find_or_create_person guid
    person.first_name = entry[:givenname][0]
    person.last_name = entry[:sn][0]
    person.job_title = entry[:title] ? entry[:title][0] : nil
  end

  def find_or_create_person(guid)
    Person.find_by_guid(guid) || Person.new({ guid: guid, company: @ldap.company })
  end

  def save_people
    ActiveRecord::Base.transaction do
      @people.each do |person|
        person.save
      end
    end
  end

  def update_manager_data
    ActiveRecord::Base.transaction do
      @managers.each do |mgr_name, user_guids|
        split = mgr_name.split(' ')
        manager = Person.where({ first_name: split[0], last_name: split[-1]}).first
        if manager
          user_guids.each do |guid|
          Person.where({ guid: user_guids }).update_all({ manager_id: manager.id })
          end
        end
      end
    end
  end

end
