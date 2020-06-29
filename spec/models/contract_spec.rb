require 'rails_helper'
require 'models/concerns/ownable'

RSpec.describe Contract, type: :model do

  describe "Associations" do
    it_behaves_like "ownable"
  end
end
