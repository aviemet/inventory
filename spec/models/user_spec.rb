require 'rails_helper'

RSpec.describe User, type: :model do
  subject { FactoryBot.build(:user) }

  describe "Validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password) }
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
    it { should belong_to(:person).optional }
    it { should belong_to(:active_company).optional }
  end
end
