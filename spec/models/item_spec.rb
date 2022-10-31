require "rails_helper"
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/assign_toable"
require "models/concerns/purchasable"
require "models/concerns/fieldable"

RSpec.describe Item, type: :model do
  subject { build(:item) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:item, {
        name: nil
      })).to_not be_valid

      expect(build(:item, {
        model: nil
      })).to_not be_valid
    end

    it "uses money-rails to handle cost" do
      expect(subject.cost).to be_a Money
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:single"
    it_behaves_like "assign_toable"
    it_behaves_like "purchasable"
    it_behaves_like "fieldable"
  end
end
