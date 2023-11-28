require 'rails_helper'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Purchase do

  describe "Associations" do
    it_behaves_like "ownable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
