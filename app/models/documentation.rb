class Documentation < ApplicationRecord
  include Ownable

  multisearchable(
    against: [:title],
    additional_attributes: ->(record) { { label: record.title } },
  )

  pg_search_scope(
    :search,
    against: [:slug, :title, :body],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :title

  tracked
  resourcify

  belongs_to :documentable, polymorphic: true
  belongs_to :created_by, class_name: "Person", optional: true

  validates :title, presence: true

  scope :includes_associated, -> { includes([:created_by]) }
end
