class Documentation < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:slug, :title, :body, :created_by],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  belongs_to :created_by, class_name: "User", required: false

  scope :includes_associated, -> { includes([:created_by]) }
end
