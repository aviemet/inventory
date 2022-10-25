require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require 'models/concerns/assign_toable'

RSpec.describe Department, type: :model do
  subject {
    build_stubbed(:department)
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is valid without a location" do
      subject.location = nil
      expect(subject).to be_valid
    end

    it "is valid without a manager" do
      subject.manager = nil
      expect(subject).to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "contactable"
    it_behaves_like "ownable"
    it_behaves_like "assign_toable"
  end
end
