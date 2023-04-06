class LocationSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes :name,
             :parent_id,
             :currency,
             :created_at,
             :updated_at

  # view :counts do
  #   attribute :counts do |loc|
  #     {
  #       items: loc&.items&.size || 0,
  #       accessories: loc&.accessories&.size || 0,
  #       consumables: loc&.consumables&.size || 0,
  #       components: loc&.components&.size || 0,
  #       licenses: loc&.licenses&.size || 0,
  #       people: loc&.people&.size || 0,
  #     }
  #   end
  # end

  # view :associations do
  #   association :parent, serializer: LocationSerializer
  #   association :contact, serializer: ContactSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :department, serializer: DepartmentSerializer
  #   association :location, serializer: LocationSerializer
  # end

  # view :index do
  #   include_view :counts

  #   association :parent, serializer: LocationSerializer
  #   association :contact, serializer: ContactSerializer
  #   association :department, serializer: DepartmentSerializer
  #   association :location, serializer: LocationSerializer
  # end

  # view :show do
  #   association :parent, serializer: LocationSerializer
  #   association :contact, serializer: ContactSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :department, serializer: DepartmentSerializer
  #   association :location, serializer: LocationSerializer
  # end

  # view :as_options do
  #   only :id, :name
  # end
end
