# == Schema Information
#
# Table name: phones
#
#  id          :bigint           not null, primary key
#  extension   :string
#  notes       :text
#  number      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  contact_id  :bigint           not null
#
# Indexes
#
#  index_phones_on_category_id  (category_id)
#  index_phones_on_contact_id   (contact_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (contact_id => contacts.id)
#
class PhoneSerializer < ApplicationSerializer
  object_as :phone

  attributes(
    :number,
    :extension,
    :notes,
    :contact_id,
    :category_id,
    :created_at,
    :updated_at,
  )

  belongs_to :category, serializer: Categories::OptionsSerializer
end
