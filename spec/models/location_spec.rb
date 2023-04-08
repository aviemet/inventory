require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require 'models/concerns/assign_toable'

RSpec.describe Location, type: :model do
  subject {
    create(:location)
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:location)).to be_valid
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

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
