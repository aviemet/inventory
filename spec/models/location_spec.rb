require 'rails_helper'
require 'models/concerns/contactable_spec'

RSpec.describe Location, type: :model do

  describe "Associations" do
    it_behaves_like "contactable"
  end
end
