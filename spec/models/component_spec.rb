require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"

RSpec.describe Component, type: :model do
  subject {
    build(:component)
  }

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:quantity"
  end
end
