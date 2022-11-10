class Component < Asset
  include Assignable::Quantity

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :activities]) }

end
