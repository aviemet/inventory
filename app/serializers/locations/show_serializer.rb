class Locations::ShowSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes(
     :name,
     :parent_id,
     :currency,
     :created_at,
     :updated_at,
   )

  has_many :activities, serializer: ActivitySerializer
  belongs_to :parent, serializer: LocationSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :location, serializer: LocationSerializer
end
