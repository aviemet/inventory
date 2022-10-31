require 'rails_helper'
require 'models/concerns/contactable'

RSpec.describe Company::AsSetup, type: :model do
  subject { create(:company_as_setup) }

  describe "Setup" do
    it "creates default Categories on create" do
      expect(subject.categories.count).to be > 0
    end
  end

end
