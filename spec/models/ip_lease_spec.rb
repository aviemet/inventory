require "rails_helper"

RSpec.describe IpLease do
  subject(:ip_lease) { build(:ip_lease, address: "10.10.10.1") }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(ip_lease).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:ip_lease, {
        nic: nil
      },)).not_to be_valid
    end
  end

  describe "find_in_network" do
    context "when provided a valid argument: Network objec, IPAddress object, or string" do
      it "finds a list of leases which are within the given network" do
        network = build(:network, address: ip_lease.address )

        expect{ described_class.find_in_network(network) }.not_to raise_error
        expect{ described_class.find_in_network(IPAddress.parse("10.10.10.0/24")) }.not_to raise_error
        expect{ described_class.find_in_network("10.10.10.0/24") }.not_to raise_error
      end
    end

    context "when provided an invalid argument" do
      it "raises an error" do
        expect{ described_class.find_in_network("") }.to raise_error(ArgumentError)
        expect{ described_class.find_in_network(2) }.to raise_error(ArgumentError)
      end
    end
  end
end
