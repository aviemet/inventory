require "rails_helper"

RSpec.describe LdapSync, type: :service do
  let(:ldap) { create(:ldap) }

  context "when calling #save" do
    it "saves person records" do
      pending "still working on the feature"
      syncer = described_class.new(ldap)
      syncer.instance_variable_set(:@people, mock_ldap_data)
    end
  end
end
