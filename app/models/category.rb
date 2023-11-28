class Category < ApplicationRecord
  include Ownable
  include Fieldable

  pg_search_scope(
    :search,
    against: [:name],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :slug_from_category_type

  tracked
  resourcify

  @categorizable_types = %w(Asset Item Accessory Address Component Consumable Contact Contract Department Documentation Email License Location Model Order Person Phone Ticket User Vendor Website)

  validates :categorizable_type, inclusion: { in: @categorizable_types, allow_nil: false }
  validates :categorizable_type, presence: true
  validates :name, presence: true

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
    self.type.find_by_category(self) # rubocop:disable Rails/DynamicFindBy
  end

  def qty
    records.count
  end

  def type
    self.categorizable_type.constantize
  end
end
