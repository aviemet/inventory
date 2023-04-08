require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/purchasable'
require 'models/concerns/fieldable'
require 'models/concerns/assignable'
require "models/concerns/serializable"

RSpec.describe License, type: :model do
  subject {
    build(:license)
  }

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "purchasable"
    it_behaves_like "fieldable"
    it_behaves_like "assignable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
