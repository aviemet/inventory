class Consumable < Asset
  include Assignable::Consume

  multisearchable(
    against: [:name, :asset_tag, :serial],
    additional_attributes: ->(record) { { label: record.name } },
  )

  tracked
  resourcify

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :model, :activities]) }
end
