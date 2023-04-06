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

  has_many :activities, serializer: ActivitySerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :category, serializer: CategorySerializer
end
