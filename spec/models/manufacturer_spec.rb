require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Manufacturer do
  subject(:manufacturer) { build(:manufacturer) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(manufacturer).to be_valid
    end

    it "is not valid without a name" do
      manufacturer.name = nil
      expect(manufacturer).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "contactable"
    it_behaves_like "ownable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
