require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/assignable'
require 'models/concerns/assign_toable'
require 'models/concerns/purchasable'
require 'models/concerns/fieldable'

RSpec.describe Item, type: :model do
  subject {
    create(:item)
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      subject.parent = build(:item)
      expect(subject).to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable"
    it_behaves_like "assign_toable"
    it_behaves_like "purchasable"
    it_behaves_like "fieldable"
  end
end
