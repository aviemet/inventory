require "net/ldap"

class LdapJob < ApplicationJob
  queue_as :default

  def perform(ldap)
    sync = LdapSync.new(ldap)
    sync.scrape
    sync.save
  end
end
