# == Schema Information
#
# Table name: vendors
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  slug       :string           not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_vendors_on_slug  (slug) UNIQUE
#
class VendorSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :url,
    :created_at,
    :updated_at,
  )
end
