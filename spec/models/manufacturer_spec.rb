require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'

RSpec.describe Manufacturer, type: :model do
  subject {
    build_stubbed(:manufacturer)
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
    it_behaves_like "ownable"
  end
end
