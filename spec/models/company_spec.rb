require 'rails_helper'
require 'models/concerns/contactable'
require "models/concerns/serializable"

RSpec.describe Company do
  subject(:company) { build(:company) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(company).to be_valid
    end

    it "is not valid without a name" do
      company.name = nil
      expect(company).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "contactable"

    it { is_expected.to have_many(:ownerships) }

    {
      items: 'Item',
      departments: 'Department',
      locations: 'Location',
      contracts: 'Contract',
      networks: 'Network',
      people: 'Person',
      vendors: 'Vendor'
    }.each_pair do |assoc, _|
      it { is_expected.to have_many(assoc) }
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
