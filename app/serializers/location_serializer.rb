# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  currency   :string
#  name       :string           not null
#  slug       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  parent_id  :bigint
#
# Indexes
#
#  index_locations_on_parent_id  (parent_id)
#  index_locations_on_slug       (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (parent_id => locations.id)
#
class LocationSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes(
    :name,
    :currency,
    :parent_id,
  )
end
