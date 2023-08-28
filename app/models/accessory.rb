class Accessory < Asset
  include Assignable::Quantity

  multisearchable(
    against: [:name, :asset_tag, :serial],
    additional_attributes: ->(record) { { label: record.name } },
  )

  tracked
  resourcify

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer, :model, :activities]) }
end
