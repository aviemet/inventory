class Location < ApplicationRecord
  include Ownable
  include AssignToable
  include Contactable
  include Fieldable
  include Documentable

  multisearchable(
    against: [:name],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name], associated_against: {
      department: [:name],
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  belongs_to :parent, class_name: "Location", optional: true
  has_many :people, dependent: :nullify

  validates :name, presence: true

  scope :includes_associated, -> { includes([:parent, :department, :activities, :documentations]) }

  def default_location
    self
  end

  def location
    self
  end
end
