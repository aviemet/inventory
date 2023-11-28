require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe User do
  subject(:user) { build_stubbed(:user) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end

    it { is_expected.to validate_presence_of(:email) }
    # it { is_expected.to validate_presence_of(:password) }

    it { is_expected.to allow_value("1StrongPassword!").for(:password) }
    # Require uppercase letter
    it { is_expected.not_to allow_value("1weakpassword!").for(:password) }
    # Require number
    it { is_expected.not_to allow_value("Weakpassword!").for(:password) }
    # Require symbol
    it { is_expected.not_to allow_value("Weakpassword1").for(:password) }
    # Require 8 character minimum length
    it { is_expected.not_to allow_value("a1P.").for(:password) }
  end

  describe "Associations" do
    it { is_expected.to belong_to(:active_company).optional }
    it { is_expected.to have_many(:people) }
    it { is_expected.to have_many(:companies) }
    it { is_expected.to have_many(:groups) }
    it { is_expected.to have_one(:person) }

    it "returns the person record associated with the active company" do
      user = build(:user)
      user.people << build(:person)
      expect(user.person).to eq(user.company.people.first)
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
