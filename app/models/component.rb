class Component < Asset
  include Assignable::Quantity

  attribute :type, default: :Component

  default_scope { where(type: :Component) }

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :activities]) }

end
