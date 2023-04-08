require 'rails_helper'

RSpec.describe Website, type: :model do

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
