# == Schema Information
#
# Table name: departments
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  notes       :text
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location_id :bigint
#  manager_id  :bigint
#
# Indexes
#
#  index_departments_on_location_id  (location_id)
#  index_departments_on_manager_id   (manager_id)
#  index_departments_on_slug         (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (location_id => locations.id)
#  fk_rails_...  (manager_id => people.id)
#
class Department < ApplicationRecord
  include Contactable
  include Ownable
  include Documentable

  multisearchable(
    against: [:name],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name, :notes],
    associated_against: {
      location: [:name]
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  validates :name, presence: true

  belongs_to :location, optional: true # primary location, such as main office of department
  belongs_to :manager, class_name: :Person, optional: true

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Department.items, Department.contracts, etc.
  has_many :ownerships, dependent: :restrict_with_error
  {
    assets: 'Asset',
    items: 'Item',
    accessories: 'Accessory',
    components: 'Component',
    consumables: 'Consumable',
    licenses: 'License',
    contracts: 'Contract',
    people: 'Person',
    vendors: 'Vendor'
  }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model.to_s
  end

  scope :includes_associated, -> { includes([:location, :manager, :items, :contracts, :people, :vendors, :documentations]) }
end
