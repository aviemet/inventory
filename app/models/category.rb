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

  @categorizable_types = %w(Accessory Address Component Consumable Contact Contract Department Email Item License Location Manufacturer Model Order Person Phone Ticket User Vendor Vendor Website)

  slug :slug_from_category_type

  audited

  validates_inclusion_of :categorizable_type, in: @categorizable_types, allow_nil: false
  validates_presence_of :categorizable_type
  validates_presence_of :name

  delegate :to_s, to: :category_with_type

  scope :find_by_type, ->(type){ where(categorizable_type: type.to_s.singularize.camelize) }

  def category_with_type
    "#{self.categorizable_type} - #{self.name}"
  end

  def slug_from_category_type
    "#{self.categorizable_type}-#{self.name}".downcase
  end
end
