require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require 'models/concerns/assign_toable'

RSpec.describe Location, type: :model do
  subject {
    build(:location)
  }

  describe "Validations" do

    it "is valid with valid attributes" do
      subject.parent = build(:location)
      expect(subject).to be_valid
    end

    it "is valid without a parent location" do
      subject.parent = nil
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "contactable"
    it_behaves_like "assign_toable"
  end
end
