# == Schema Information
#
# Table name: assets
#
#  id                  :bigint           not null, primary key
#  asset_tag           :string
#  cost_cents          :integer
#  cost_currency       :string           default("USD"), not null
#  min_qty             :integer
#  name                :string           not null
#  notes               :text
#  purchased_at        :datetime
#  qty                 :integer
#  requestable         :boolean          default(FALSE), not null
#  serial              :string
#  type                :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  default_location_id :bigint
#  model_id            :bigint           not null
#  status_label_id     :bigint
#  vendor_id           :bigint
#
# Indexes
#
#  index_assets_on_asset_tag            (asset_tag) UNIQUE
#  index_assets_on_default_location_id  (default_location_id)
#  index_assets_on_model_id             (model_id)
#  index_assets_on_serial               (serial) UNIQUE
#  index_assets_on_status_label_id      (status_label_id)
#  index_assets_on_vendor_id            (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (default_location_id => locations.id)
#  fk_rails_...  (model_id => models.id)
#  fk_rails_...  (status_label_id => status_labels.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
require 'rails_helper'
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/serializable"

RSpec.describe Accessory do
  subject(:accessory) { build(:accessory) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(accessory).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:accessory, {
        name: nil
      },)).not_to be_valid

      expect(build(:accessory, {
        model: nil
      },)).not_to be_valid
    end

    it "uses money-rails to handle cost" do
      expect(accessory.cost).to be_a Money
    end
  end

  describe "Associations:" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:quantity"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
