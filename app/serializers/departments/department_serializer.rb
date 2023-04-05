class DepartmentSerializer < ApplicationSerializer
  object_as :department

  attributes :name,
             :slug,
             :location_id,
             :notes,
             :created_at,
             :updated_at

  # attribute :slug, name: :to_param

  # view :counts do
  #   attribute :counts do |department|
  #     {
  #       items: department&.items&.size || 0,
  #       accessories: department&.accessories&.size || 0,
  #       consumables: department&.consumables&.size || 0,
  #       components: department&.components&.size || 0,
  #       licenses: department&.licenses&.size || 0,
  #       contracts: department&.contracts&.size || 0,
  #       people: department&.people&.size || 0,
  #     }
  #   end
  # end

  # view :associations do
  #   association :activities, serializer: ActivitySerializer
  #   association :items, serializer: ItemSerializer
  #   association :accessories, serializer: AccessorySerializer
  #   association :components, serializer: ComponentSerializer
  #   association :consumables, serializer: ConsumableSerializer
  #   association :licenses, serializer: LicenseSerializer
  #   association :people, serializer: PersonSerializer
  # end

  # view :as_options do
  #   only :id, :name
  # end

  # view :index do
  #   include_view :counts

  #   association :items, serializer: ItemSerializer
  #   association :accessories, serializer: AccessorySerializer
  #   association :components, serializer: ComponentSerializer
  #   association :consumables, serializer: ConsumableSerializer
  #   association :licenses, serializer: LicenseSerializer
  #   association :people, serializer: PersonSerializer
  # end

  # view :show do
  #   association :location, serializer: LocationSerializer

  #   include_view :counts
  # end
end
