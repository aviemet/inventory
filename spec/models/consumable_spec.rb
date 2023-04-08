require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"

RSpec.describe Consumable, type: :model do
  subject { build(:consumable) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:consumable, {
        name: nil
      },)).to_not be_valid

      consumable = build(:consumable)
      consumable.model = nil
      expect(consumable).to_not be_valid
    end

    it "uses money-rails to handle cost" do
      expect(subject.cost).to be_a Money
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
