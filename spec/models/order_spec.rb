require 'rails_helper'

RSpec.describe Order, type: :model do

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
