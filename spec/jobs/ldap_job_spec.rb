require 'rails_helper'

RSpec.describe LdapJob do
  describe "syncronizes users",  if: Rails.application.credentials.ldap do
    it "connects to AD server" do
      described_class.perform_now(Ldap.create({
        host: '10.10.20.31',
        port: 389,
        domain: "thebatterysf.com",
        username: Rails.application.credentials.ldap.username,
        password: Rails.application.credentials.ldap.password,
        tree_base: "ou=Battery Users, dc=thebatterysf, dc=com",
        user_search: '',
        sync_interval: 0
      }))

      assert true
    end
  end
end
