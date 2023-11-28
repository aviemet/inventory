require 'rails_helper'
require 'models/concerns/contactable'
require "models/concerns/serializable"

RSpec.describe Warranty do
  subject(:warranty) { build(:warranty) }

  describe "Associations" do
    it_behaves_like "contactable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
