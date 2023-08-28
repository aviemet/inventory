require "rails_helper"

RSpec.describe IpLease, type: :model do
  subject { build(:ip_lease) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:ip_lease, {
        nic: nil
      },)).to_not be_valid
    end
  end

  describe "in_network" do
    context "when provided a valid argument: Network objec, IPAddress object, or string" do
      it "finds a list of leases which are within the given network" do
        expect{ IpLease.in_network(build(:network)) }.to_not raise_error
        expect{ IpLease.in_network(IPAddress.parse("10.10.10.0/24")) }.to_not raise_error
        expect{ IpLease.in_network("10.10.10.0/24") }.to_not raise_error
      end
    end

    context "when provided an invalid argument" do
      it "raises an error" do
        expect{ IpLease.in_network("") }.to raise_error(ArgumentError)
        expect{ IpLease.in_network(2) }.to raise_error(ArgumentError)
      end
    end
  end
end
