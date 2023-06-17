require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/contactable'
require 'models/concerns/assign_toable'
require 'models/concerns/fieldable'
require "models/concerns/serializable"

RSpec.describe Person, type: :model do
  subject { create(:person) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:person)).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:person, {
        first_name: nil
      },)).to_not be_valid

      expect(build(:person, {
        last_name: nil
      },)).to_not be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "contactable"
    it_behaves_like "assign_toable"
    it_behaves_like "fieldable"

    it { should belong_to(:user).optional }
    it { should belong_to(:manager).class_name('Person').optional }
    it { should belong_to(:location).optional }
    it { should have_many(:tickets) }
    it { should have_many(:groups) }

    it "should return a value for default_location" do
      person = build(:person)
      person.location = nil

      expect(person.default_location).to be_nil

      person.department = build(:department)
      expect(person.default_location).to be(person.department.location)

      person.location = build(:location)
      expect(person.default_location).to be(person.location)
      expect(person.default_location).to_not be(person.department.location)
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
