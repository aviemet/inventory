class Models::ShowSerializer < ModelSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_many :activities, serializer: ActivitySerializer
  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :components, serializer: ComponentSerializer

  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :category, serializer: CategorySerializer
end
