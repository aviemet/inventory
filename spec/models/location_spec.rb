require 'rails_helper'
require 'models/concerns/contactable_spec'
require 'models/concerns/ownable_spec'

RSpec.describe Location, type: :model do

  describe "Associations" do
    it_behaves_like "contactable"
    it_behaves_like "ownable"
  end
end
