require 'rails_helper'

RSpec.describe Nic, type: :model do
  subject{ build(:nic) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:nic, {
        nic_type: nil
      })).to_not be_valid
    end
  end

end
