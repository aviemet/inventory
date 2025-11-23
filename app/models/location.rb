# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  currency   :string
#  name       :string           not null
#  slug       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  parent_id  :bigint
#
# Indexes
#
#  index_locations_on_parent_id  (parent_id)
#  index_locations_on_slug       (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (parent_id => locations.id)
#
class Location < ApplicationRecord
  include Ownable
  include AssignToable
  include Contactable
  include Fieldable
  include Documentable

  include PgSearchable
  pg_search_config(
    against: [:name],
    associated_against: {
      department: [:name],
    },
    enable_multisearch: true,
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
