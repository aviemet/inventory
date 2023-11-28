require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/serializable"

RSpec.describe Accessory do
  subject(:accessory) { build(:accessory) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(accessory).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:accessory, {
        name: nil
      },)).not_to be_valid

      expect(build(:accessory, {
        model: nil
      },)).not_to be_valid
    end

    it "uses money-rails to handle cost" do
      expect(accessory.cost).to be_a Money
    end
  end

  describe "Associations:" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:quantity"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
