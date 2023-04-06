class ManufacturerSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes :id,
             :name,
             :created_at,
             :updated_at

  # view :counts do
  #   attribute :counts do |manufacturer|
  #     {
  #       models: manufacturer&.models&.size || 0,
  #       items: manufacturer&.items&.size || 0,
  #       accessories: manufacturer&.accessories&.size || 0,
  #       consumables: manufacturer&.consumables&.size || 0,
  #       components: manufacturer&.components&.size || 0,
  #     }
  #   end
  # end

  # view :associations do
  #   association :contact, serializer: ContactSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :models, serializer: ModelSerializer
  #   association :items, serializer: ItemSerializer
  #   association :accessories, serializer: AccessorySerializer
  #   association :consumables, serializer: ConsumableSerializer
  #   association :components, serializer: ComponentSerializer
  # end

  # view :index do
  #   include_view :counts
  # end

  # view :show do
  #   attribute :items_count do |manufacturer|
  #     manufacturer.items.size
  #   end

  #   attribute :accessories_count do |manufacturer|
  #     manufacturer.accessories.size
  #   end

  #   attribute :consumables_count do |manufacturer|
  #     manufacturer.consumables.size
  #   end

  #   attribute :components_count do |manufacturer|
  #     manufacturer.components.size
  #   end

  #   association :contact, serializer: ContactSerializer
  # end

  # view :as_options do
  #   only :id, :name
  # end
end
