require 'rails_helper'
require 'models/concerns/ownable'

RSpec.describe Contract, type: :model do
  subject { build(:contract) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:contract, {
        name: nil
      },)).to_not be_valid

      expect(build(:contract, {
        category: nil
      },)).to_not be_valid

      expect(build(:contract, {
        vendor: nil
      },)).to_not be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
