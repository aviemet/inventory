require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe User, type: :model do
  subject { build_stubbed(:user) }

  describe "Validations" do
    it "has a valid factory" do
      expect(subject).to be_valid
    end

    it { should validate_presence_of(:email) }
    # it { should validate_presence_of(:password) }
    it { should allow_value("1StrongPassword!").for(:password) }
    # Require uppercase letter
    it { should_not allow_value("1weakpassword!").for(:password) }
    # Require number
    it { should_not allow_value("Weakpassword!").for(:password) }
    # Require symbol
    it { should_not allow_value("Weakpassword1").for(:password) }
    # Require 8 character minimum length
    it { should_not allow_value("a1P.").for(:password) }
  end

  describe "Associations" do
    it { should belong_to(:active_company).optional }
    it { should have_many(:people) }
    it { should have_many(:companies) }
    it { should have_many(:groups) }
    it { should have_one(:person) }

    it "should return the person record associated with the active company" do
      user = build(:user)
      user.people << build(:person)
      expect(user.person).to eq(user.company.people.first)
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
