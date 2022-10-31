require 'rails_helper'

RSpec.describe LdapSync, type: :service do
  let(:ldap) { create(:ldap) }

  context "when calling #save" do
    skip "saves person records" do
      syncer = LdapSync.new(ldap)
      syncer.instance_variable_set(:@people, mock_ldap_data)
    end
  end
end
