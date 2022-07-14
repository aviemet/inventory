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

    filter = Net::LDAP::Filter.eq("cn", "Max*")
    
    ap({ connection: connection })

    connection.search(base: ldap.tree_base, filter: filter) do |entry|
      ap({ entry: entry.as_json })
      p = Person.new()
      groups = []
      email = ''
      username = ''
      if entry[:objectclass].include?("user")
        p.first_name = entry[:givenname][0]
        p.last_name = entry[:sn][0]
        p.job_title = entry[:title] ? entry[:title][0] : nil
        
        username = entry[:samaccountname]
        email = entry[:mail]
        
        groups = entry[:memberof].map{ |group| group.match(/CN=(\w+),/)[1] }

        if entry[:manager]
          name = entry[:manager].map{ |mgr| mgr.match(/CN=([\w\s]+),/)[1] }
          ap({ mgrs: name })
        end
      end

      ap({ person: p, email: email, groups: groups, username: username })
    end

    ap({ response: connection.get_operation_result })
  end
end
