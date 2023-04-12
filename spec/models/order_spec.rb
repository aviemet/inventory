require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Order, type: :model do

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
