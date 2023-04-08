require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/contactable'
require 'models/concerns/assign_toable'
require 'models/concerns/fieldable'

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
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
