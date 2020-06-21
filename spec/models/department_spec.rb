require 'rails_helper'

RSpec.describe Department, type: :model do

  describe "Associations" do
    it_behaves_like "contactable"
  end
end
