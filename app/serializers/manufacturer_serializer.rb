# == Schema Information
#
# Table name: manufacturers
#
#  id         :bigint           not null, primary key
#  name       :string
#  slug       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_manufacturers_on_slug  (slug) UNIQUE
#
class ManufacturerSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :created_at,
    :updated_at,
  )
end
