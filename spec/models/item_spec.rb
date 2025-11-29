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
require "rails_helper"
require "models/concerns/ownable"
require "models/concerns/assignable"
require "models/concerns/assign_toable"
require "models/concerns/purchasable"
require "models/concerns/fieldable"
require "models/concerns/serializable"

RSpec.describe Item do
  subject(:item) { create(:item) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:item)).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:item, {
        name: nil
      },)).not_to be_valid

      item = build(:item, { model: nil })
      item.model = nil
      expect(item).not_to be_valid
    end

    it "uses money-rails to handle cost" do
      expect(item.cost).to be_a Money
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "assignable:single"
    it_behaves_like "assign_toable"
    it_behaves_like "purchasable"
    it_behaves_like "fieldable"

    it { is_expected.to have_many(:nics) }
    it { is_expected.to have_many(:ips) }
    it { is_expected.to have_many(:ip_leases) }
    it { is_expected.to belong_to(:default_location) }

    context "when unassigned" do
      it "uses default_location as location" do
        expect(item.location).to eq(item.default_location)
      end
    end

    context "when assigned" do
      it "uses the assignment's location as location" do
        item.assign_to(create(:person))
        expect(item.location).to eq(item.assignment.location)
      end
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
