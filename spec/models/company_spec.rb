require 'rails_helper'
require 'models/concerns/contactable'

RSpec.describe Company, type: :model do
  subject { build(:company) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "contactable"

    it { should have_many(:ownerships) }
    {
      items: 'Item',
      departments: 'Department',
      locations: 'Location',
      contracts: 'Contract',
      networks: 'Network',
      people: 'Person',
      vendors: 'Vendor'
    }.each_pair do |assoc, _|
      it { should have_many(assoc) }
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
