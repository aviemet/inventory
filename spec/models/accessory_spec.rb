require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"

RSpec.describe Accessory, type: :model do
  subject {
    build_stubbed(:accessory)
  }

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:quantity"
  end
end
