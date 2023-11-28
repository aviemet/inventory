require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Nic do
  subject(:nic) { build(:nic) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(nic).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:nic, {
        nic_type: nil
      },)).not_to be_valid
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
