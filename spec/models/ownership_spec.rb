require 'rails_helper'

RSpec.describe Ownership do
  subject(:ownership) { build(:ownership) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(ownership).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:ownership, {
        ownable: nil
      },)).not_to be_valid
    end
  end

  describe "Associations" do
    it { is_expected.to belong_to(:ownable) }
  end
end
