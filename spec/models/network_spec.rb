require 'rails_helper'
require 'models/concerns/ownable'

RSpec.describe Network, type: :model do
  subject { build(:network) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:network, {
        address: nil
      },)).to_not be_valid

      expect(build(:network, {
        address: "10.10.10.1"
      },)).to_not be_valid
    end
  end

  describe "Defaults" do
    it "fixes network address inputs to find the closest network address" do
      network = build(:network, {
        address: "10.10.10.1/24"
      },)
      expect(network).to be_valid
      expect(network.address.to_s).to eq("10.10.10.0")
    end
  end

  describe "Pagination" do
    it "paginates hosts" do
      network = build(:network, subnet: 22)
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
