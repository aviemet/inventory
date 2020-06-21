require 'rails_helper'
require 'models/concerns/ownable_spec'

RSpec.describe Item, type: :model do

  describe "Associations" do
    it_behaves_like "ownable"
  end
end
