require 'rails_helper'
require 'models/concerns/contactable'

RSpec.describe Company::AsSetup do
  subject(:company) { create(:company_as_setup) }

  describe "Setup" do
    it "creates default Categories on create" do
      expect(company.categories.count).to be > 0
    end
  end

end
