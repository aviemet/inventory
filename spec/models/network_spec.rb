require 'rails_helper'
require 'models/concerns/ownable_spec'

RSpec.describe Network, type: :model do

  describe "Associations" do
    it_behaves_like "ownable"
  end
end
