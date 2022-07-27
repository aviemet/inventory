require 'net/ldap'

class LdapJob < ApplicationJob
  queue_as :default

  def perform(ldap)
    ap({ ldap: ldap })
    sync = LdapSync.new(ldap)
    ap({ sync: sync.as_json })
    sync.scrape
    ap({ people: sync.people.as_json, managers: sync.managers.as_json })
    sync.save
  end
end
