require 'rails_helper'

RSpec.describe Location, type: :model do

  describe "Associations" do
    it_behaves_like "contactable"
  end
end
