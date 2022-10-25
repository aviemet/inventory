require 'rails_helper'
require 'models/concerns/fieldable'

RSpec.describe Model, type: :model do
  subject {
    build_stubbed(:model)
  }

  describe "Associations" do
    it_behaves_like "fieldable"
  end
end
