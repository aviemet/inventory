require 'rails_helper'
require 'models/concerns/contactable_spec'
require 'models/concerns/ownable_spec'

RSpec.describe Person, type: :model do
  subject { 
    described_class.new(
      first_name: "Avi",
      last_name: "Walden"
    )
  }

  describe "Validations" do

    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a first name" do
      subject.first_name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a last name" do
      subject.last_name = nil
      expect(subject).to_not be_valid
    end

  end

  describe "Associations" do
    it_behaves_like "contactable"
    it_behaves_like "ownable"
  end
end
