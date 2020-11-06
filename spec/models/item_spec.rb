require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/purchasable'
require 'models/concerns/fieldable'

RSpec.describe Item, type: :model do
  subject {
    build(:item)
  }
  
  describe "Validations" do
    it "is valid with valid attributes" do
      subject.parent = build(:item)
      expect(subject).to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "purchasable"
    it_behaves_like "fieldable"
  end
end
