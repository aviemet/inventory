require 'rails_helper'

RSpec.describe ContractType, type: :model do

  describe "Associations" do
    it { should have_many(:contracts) }
  end
end
