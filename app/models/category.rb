class Category < ApplicationRecord
  include Ownable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name], 
    using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  slug :slug_from_category_type

  tracked

  @categorizable_types = %w(Asset Item Accessory Address Component Consumable Contact Contract Department Email License Location Model Order Person Phone Ticket User Vendor Website)

  validates_inclusion_of :categorizable_type, in: @categorizable_types, allow_nil: false
  validates_presence_of :categorizable_type
  validates_presence_of :name

  scope :find_by_type, ->(type){ where(categorizable_type: type.to_s.singularize.camelize) }

  scope :includes_associated, -> { includes([]) }

  delegate :to_s, to: :category_with_type

  def category_with_type
    "#{self.categorizable_type} - #{self.name}"
  end

  def slug_from_category_type
    "#{self.categorizable_type}-#{self.name}".downcase
  end

  def records
    self.type.find_by_category(self)
  end

  def type
    self.categorizable_type.constantize
  end
end
