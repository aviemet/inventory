class Location < ApplicationRecord
  include Ownable
  include AssignToable
  include Contactable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:name], associated_against: {
      department: [:name],
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

  slug :name

  resourcify
  audited

  belongs_to :parent, class_name: "Location", required: false
  has_many :people

  validates_presence_of :name

  scope :includes_associated, -> { includes([:parent, :department]) }

  def default_location
    self
  end
end
