require 'rails_helper'

RSpec.describe ContractType, type: :model do
  subject {
    build(:contract_type)
  }

  describe "Associations" do
    it { should have_many(:contracts) }
  end
end
