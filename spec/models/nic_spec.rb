# == Schema Information
#
# Table name: nics
#
#  id         :bigint           not null, primary key
#  mac        :macaddr
#  nic_type   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  item_id    :bigint           not null
#
# Indexes
#
#  index_nics_on_item_id  (item_id)
#
# Foreign Keys
#
#  fk_rails_...  (item_id => assets.id)
#
require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Nic do
  subject(:nic) { build(:nic) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(nic).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:nic, {
        nic_type: nil
      },)).not_to be_valid
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
