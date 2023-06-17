require "rails_helper"
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/assign_toable"
require "models/concerns/purchasable"
require "models/concerns/fieldable"
require "models/concerns/serializable"

RSpec.describe Item, type: :model do
  subject { create(:item) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:item)).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:item, {
        name: nil
      },)).to_not be_valid

      item = build(:item, {model: nil })
      item.model = nil
      expect(item).to_not be_valid
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

    it { should have_many(:nics) }
    it { should have_many(:ips) }
    it { should have_many(:ip_leases) }
    it { should belong_to(:default_location) }

    context "when unassigned" do
      it "uses default_location as location" do
        expect(subject.location).to eq(subject.default_location)
      end
    end

    context "when assigned" do
      it "uses the assignment's location as location" do
        subject.assign_to(create(:person))
        expect(subject.location).to eq(subject.assignment.location)
      end
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
