# == Schema Information
#
# Table name: contracts
#
#  id          :bigint           not null, primary key
#  begins_at   :datetime
#  ends_at     :datetime
#  name        :string           not null
#  notes       :text
#  number      :string
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  vendor_id   :bigint           not null
#
# Indexes
#
#  index_contracts_on_category_id  (category_id)
#  index_contracts_on_slug         (slug) UNIQUE
#  index_contracts_on_vendor_id    (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
require 'rails_helper'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Contract do
  subject(:contract) { build_stubbed(:contract) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(contract).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:contract, {
        name: nil
      },)).not_to be_valid

      expect(build(:contract, {
        category: nil
      },)).not_to be_valid

      expect(build(:contract, {
        vendor: nil
      },)).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
