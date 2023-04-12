require 'rails_helper'
require 'models/concerns/fieldable'
require "models/concerns/serializable"

RSpec.describe Model, type: :model do
  subject {
    build(:model)
  }

  describe "Associations" do
    it_behaves_like "fieldable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
