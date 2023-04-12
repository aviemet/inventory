class Component < Asset
  include Assignable::Quantity

  tracked
  resourcify

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :activities]) }
end
