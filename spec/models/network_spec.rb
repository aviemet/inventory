# == Schema Information
#
# Table name: networks
#
#  id         :bigint           not null, primary key
#  address    :cidr             not null
#  dhcp_end   :inet
#  dhcp_start :inet
#  gateway    :inet
#  name       :string           not null
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  vlan_id    :integer
#
require 'rails_helper'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Network do
  subject(:network) {
    build(:network, {
      network_address: "10.10.10.10",
      subnet: 24,
    },)
  }

  describe "Defaults" do
    it "fixes network address inputs to find the closest network address" do
      expect(network).to be_valid
      expect(network.address.to_s).to eq("10.10.10.0")
    end
  end

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(network).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:network, {
        address: nil
      },)).not_to be_valid

      expect(build(:network, {
        subnet: 32,
      },)).not_to be_valid
    end
  end

  describe "Pagination" do
    it "paginates hosts" do
      network = build(:network, {
        network_address: "10.0.0.1",
        subnet: 22,
      },)

      hosts = network.address.paginate_hosts(page: 1)
      expect(hosts[0].address).to eq '10.0.0.1'
      expect(hosts[-1].address).to eq '10.0.0.255'

      hosts = network.address.paginate_hosts(page: 2)
      expect(hosts[0].address).to eq '10.0.1.0'
      expect(hosts[-1].address).to eq '10.0.1.255'

      hosts = network.address.paginate_hosts(page: 3)
      expect(hosts[0].address).to eq '10.0.2.0'
      expect(hosts[-1].address).to eq '10.0.2.255'

      hosts = network.address.paginate_hosts(page: 4)
      expect(hosts[0].address).to eq '10.0.3.0'
      expect(hosts[-1].address).to eq '10.0.3.254'
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
