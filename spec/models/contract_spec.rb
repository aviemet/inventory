require 'rails_helper'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Contract do
  subject(:contract) { build(:contract) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(contract).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:contract, {
        name: nil
      },)).not_to be_valid

      expect(build(:contract, {
        category: nil
      },)).not_to be_valid

      expect(build(:contract, {
        vendor: nil
      },)).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
