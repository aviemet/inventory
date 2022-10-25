require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"

RSpec.describe Consumable, type: :model do
  subject {
    build_stubbed(:consumable)
  }

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:consume"
  end
end
