# == Schema Information
#
# Table name: models
#
#  id              :bigint           not null, primary key
#  model_number    :string
#  name            :string           not null
#  notes           :text
#  slug            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  category_id     :bigint           not null
#  manufacturer_id :bigint           not null
#
# Indexes
#
#  index_models_on_category_id            (category_id)
#  index_models_on_manufacturer_id        (manufacturer_id)
#  index_models_on_name_and_model_number  (name,model_number) UNIQUE
#  index_models_on_slug                   (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (manufacturer_id => manufacturers.id)
#
class Model < ApplicationRecord
  include Ownable
  include Fieldable
  include Categorizable
  include Documentable

  multisearchable(
    against: [:name, :model_number],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name, :model_number], associated_against: {
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  validates :name, presence: true, uniqueness: {
    scope: :model_number,
    message: "Model already exists"
  }

  belongs_to :manufacturer
  has_many :items, -> { includes_associated }, dependent: :nullify, inverse_of: :model
  has_many :accessories, -> { includes_associated }, dependent: :nullify, inverse_of: :model
  has_many :consumables, -> { includes_associated }, dependent: :nullify, inverse_of: :model
  has_many :components, -> { includes_associated }, dependent: :nullify, inverse_of: :model

  scope :includes_associated, -> { includes([:manufacturer, :category, :items, :accessories, :consumables, :components, :documentations]) }

  def types
    self.category.type.where(model: self)
  end
end
