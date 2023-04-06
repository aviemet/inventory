class Locations::ShowSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes :name,
             :parent_id,
             :currency,
             :created_at,
             :updated_at

  belongs_to :parent, serializer: LocationSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :activities, serializer: ActivitySerializer
  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :location, serializer: LocationSerializer
end
