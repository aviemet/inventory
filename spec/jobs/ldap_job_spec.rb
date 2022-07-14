require 'rails_helper'

RSpec.describe LdapJob, type: :job do
  describe "syncronizes users" do
    it "connects to AD server" do
      described_class.perform_now(Ldap.create({
        host: '10.10.20.31',
        port: 389,
        username: :administrator,
        password: '*batteryADMIN*',
        tree_base: "ou=Battery Users, dc=thebatterysf, dc=com",
        user_search: '',
        sync_interval: 0
      }))
      assert true
    end
  end
end
