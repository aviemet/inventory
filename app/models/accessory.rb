class Accessory < Asset
  include Assignable::Quantity

  tracked
  resourcify

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer, :model, :activities]) }
end
