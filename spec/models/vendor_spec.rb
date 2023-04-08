require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Vendor, type: :model do
  subject { build(:vendor) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:vendor, {
        name: nil
      },)).to_not be_valid
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
