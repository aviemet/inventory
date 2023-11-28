require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/serializable"

RSpec.describe Consumable do
  subject(:consumable) { build(:consumable) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(consumable).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:consumable, {
        name: nil
      },)).not_to be_valid

      consumable = build(:consumable)
      consumable.model = nil
      expect(consumable).not_to be_valid
    end

    it "uses money-rails to handle cost" do
      expect(consumable.cost).to be_a Money
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:consume"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
