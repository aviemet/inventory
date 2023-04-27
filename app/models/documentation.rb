class Documentation < ApplicationRecord
  include Ownable
  include PgSearch::Model
  include Categorizable

  pg_search_scope(
    :search,
    against: [:slug, :title, :body],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  slug :title

  tracked
  resourcify

  belongs_to :created_by, class_name: "Person", required: false

  validates_presence_of :title

  scope :includes_associated, -> { includes([:created_by]) }
end
