class Accessory < Asset
  include Assignable::Quantity

  attribute :type, default: :Accessory

  default_scope { where(type: :Accessory) }

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer, :model, :activities]) }
end
