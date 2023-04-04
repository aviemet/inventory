class ModelSerializer < ApplicationSerializer
  attributes :name,
             :slug,
             :model_number,
             :notes,
             :category_id,
             :manufacturer_id,
             :created_at,
             :updated_at

  # view :associations do
  #   association :activities, serializer: ActivitySerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  #   association :category, serializer: CategorySerializer
  #   association :items, serializer: ItemSerializer
  #   association :accessories, serializer: AccessorySerializer
  #   association :consumables, serializer: ConsumableSerializer
  #   association :components, serializer: ComponentSerializer
  # end

  # view :index do
  #   attribute :count do |model|
  #     model.types.size
  #   end

  #   association :manufacturer, serializer: ManufacturerSerializer
  #   association :category, serializer: CategorySerializer
  # end

  # view :show do
  #   association :activities, serializer: ActivitySerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  #   association :category, serializer: CategorySerializer
  #   association :items, serializer: ItemSerializer
  #   association :accessories, serializer: AccessorySerializer
  #   association :consumables, serializer: ConsumableSerializer
  #   association :components, serializer: ComponentSerializer
  # end

  # view :as_options do
  #   only :id, :name
  # end
end
