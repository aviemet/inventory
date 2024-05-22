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
class ContractSerializer < ApplicationSerializer
  object_as :contract

  identifier :slug

  attributes(
    :name,
    :number,
    :notes,
    :begins_at,
    :ends_at,
    :vendor_id,
    :category_id,
  )

  belongs_to :category, serializer: Categories::OptionsSerializer, optional: true
end
