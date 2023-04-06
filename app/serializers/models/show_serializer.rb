class Models::ShowSerializer < ApplicationSerializer
  object_as :model

  attributes :name,
             :slug,
             :model_number,
             :notes,
             :category_id,
             :manufacturer_id,
             :created_at,
             :updated_at

  has_many :activities, serializer: ActivitySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :category, serializer: CategorySerializer
  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :components, serializer: ComponentSerializer
end
