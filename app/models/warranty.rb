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
class Warranty < ApplicationRecord
  include Contactable

  tracked
  resourcify

  belongs_to :asset, optional: false
end
