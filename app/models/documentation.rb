# == Schema Information
#
# Table name: documentations
#
#  id                :bigint           not null, primary key
#  body              :text
#  documentable_type :string           not null
#  slug              :string           not null
#  title             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  category_id       :bigint           not null
#  created_by_id     :bigint
#  documentable_id   :bigint           not null
#
# Indexes
#
#  index_documentations_on_category_id    (category_id)
#  index_documentations_on_created_by_id  (created_by_id)
#  index_documentations_on_documentable   (documentable_type,documentable_id)
#  index_documentations_on_slug           (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (created_by_id => people.id)
#
class Documentation < ApplicationRecord
  include Ownable
  include Categorizable

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
