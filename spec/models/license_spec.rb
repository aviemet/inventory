require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/purchasable'
require 'models/concerns/fieldable'
require 'models/concerns/assignable'

RSpec.describe License, type: :model do

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "purchasable"
    it_behaves_like "fieldable"
    it_behaves_like "assignable"
  end
end
