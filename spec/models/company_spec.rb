require 'rails_helper'
require 'models/concerns/contactable_spec'

RSpec.describe Company, type: :model do
  subject { 
    described_class.new(
      name: "The Company"
    )
  }

  describe "Validations" do

    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

  end

  describe "Associations" do
    it_behaves_like "contactable"
  end
  
end
