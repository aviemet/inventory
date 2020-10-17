require 'rails_helper'
require 'models/concerns/fieldable'

RSpec.describe Model, type: :model do
  subject {
    described_class.new({
      name: "The Model",
      model_number: 5
    })
  }

  describe "Associations" do
    it_behaves_like "fieldable"
  end
end
