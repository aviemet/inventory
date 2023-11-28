require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require 'models/concerns/assign_toable'
require "models/concerns/serializable"

RSpec.describe Location do
  subject(:location) { create(:location) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:location)).to be_valid
    end

    it "is not valid without a name" do
      location.name = nil
      expect(location).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "contactable"
    it_behaves_like "assign_toable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end

  describe "Helper methods" do
    it "returns itself when calling locaiton or default_location" do
      expect(location.location).to be(location)
      expect(location.default_location).to be(location)
    end
  end
end
