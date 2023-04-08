require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Category, type: :model do
  subject {
    build(:category)
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a categorizable_type" do
      subject.categorizable_type = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
