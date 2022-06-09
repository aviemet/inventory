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

  audited

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
