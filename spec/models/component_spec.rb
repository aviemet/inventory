require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/serializable"

RSpec.describe Component do
  subject(:component) { build(:component) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(component).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:component, {
        name: nil
      },)).not_to be_valid

      component = build(:component)
      component.model = nil
      expect(component).not_to be_valid
    end

    it "uses money-rails to handle cost" do
      expect(component.cost).to be_a Money
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:quantity"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
