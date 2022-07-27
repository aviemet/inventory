require 'net/ldap'

class LdapJob < ApplicationJob
  queue_as :default

  def perform(ldap)
    ap({ ldap: ldap })
    connection = Net::LDAP.new({
      host: ldap.host,
      port: ldap.port,
      auth: {
        method: :simple,
        username: "#{ldap.username}@thebatterysf.com",
        password: ldap.password,
      }
    })

    # filter = Net::LDAP::Filter.eq("ou", "Battery Users")
    
    ap({ connection: connection })

    managers = Set.new

    connection.search(base: ldap.tree_base) do |entry|
      # ap({ entry: entry.as_json })
      p = Person.new()
      groups = []
      email = ''
      username = ''
      phone = ''

      if entry[:objectclass].include?("user")
        p.first_name = entry[:givenname][0]
        p.last_name = entry[:sn][0]
        p.job_title = entry[:title] ? entry[:title][0] : nil
        p.guid = entry[:objectguid]
        
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
              managers.add match[1]
            end
          }
        end
      end

      ap({ person: p, email: email, groups: groups, username: username, phone: phone })
    end
    ap({ managers: managers.to_a })

    # ap({ response: connection.get_operation_result })
  end
end
