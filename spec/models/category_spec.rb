require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Category do
  subject(:category) { build(:category) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(category).to be_valid
    end

    it "is not valid without a name" do
      category.name = nil
      expect(category).not_to be_valid
    end

    it "is not valid without a categorizable_type" do
      category.categorizable_type = nil
      expect(category).not_to be_valid
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
