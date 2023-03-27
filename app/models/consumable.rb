class Consumable < Asset
  include Assignable::Consume

  tracked
  resourcify

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :model, :activities]) }
end
