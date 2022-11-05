class Consumable < Asset
  include Assignable::Consume

  attribute :type, default: :Consumable

  default_scope { where(type: :Consumable) }

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :model, :activities]) }

end
