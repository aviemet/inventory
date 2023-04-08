require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/serializable"

RSpec.describe Accessory, type: :model do
  subject {
    build(:accessory)
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:accessory, {
        name: nil
      },)).to_not be_valid

      expect(build(:accessory, {
        model: nil
      },)).to_not be_valid
    end

    it "uses money-rails to handle cost" do
      expect(subject.cost).to be_a Money
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
