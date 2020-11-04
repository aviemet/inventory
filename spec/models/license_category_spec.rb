require 'rails_helper'

RSpec.describe LicenseCategory, type: :model do
  subject {
    create(:license_category)
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end
  end
end
