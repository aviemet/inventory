require 'rails_helper'
require 'models/concerns/ownable'

RSpec.describe Contract, type: :model do
  subject {
    build(:contract)
  }

  describe "Associations" do
    it_behaves_like "ownable"
  end
end
