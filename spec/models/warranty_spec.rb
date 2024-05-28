# == Schema Information
#
# Table name: warranties
#
#  id         :bigint           not null, primary key
#  length     :integer
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  asset_id   :bigint           not null
#
# Indexes
#
#  index_warranties_on_asset_id  (asset_id)
#
# Foreign Keys
#
#  fk_rails_...  (asset_id => assets.id)
#
require 'rails_helper'
require 'models/concerns/contactable'
require "models/concerns/serializable"

RSpec.describe Warranty do
  subject(:warranty) { build(:warranty) }

  describe "Associations" do
    it_behaves_like "contactable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
