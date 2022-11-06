class Consumable < Asset
  include Assignable::Consume

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :model, :activities]) }

end
