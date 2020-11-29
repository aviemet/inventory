class Item < ApplicationRecord
  include Ownable
  include Assignable
  include AssignToable
  include Purchasable
  include Fieldable

  resourcify

  has_many :nics
  has_many :ips, -> { where(active: true) }, through: :nics, source: :ips
  belongs_to :model
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :parent, class_name: "Item", required: false
  has_one :item_category, through: :model
  has_one :warranty, required: false

  include PgSearch::Model
  multisearchable against: [:title, :asset_tag, :serial, :cost, :requestable, :notes]
  pg_search_scope :search,
                  against: [:title, :asset_tag, :serial, :cost, :requestable, :notes],
                  associated_against: {
                    model: [:name, :model_number, :notes],
                    item_category: [:name],
                    vendor: [:name, :url],
                    nics: [:mac],
                    ips: [:address]
                  },
                  using: {
                    tsearch: {
                      prefix: true,
                      any_word: true
                    },
                    dmetaphone: {},
                    trigram: {
                      threshold: 0.1
                    }
                  }

  scope :filter_by_category, ->(category) { where item_category: category }
  scope :filter_by_model, ->(model) { where model: model }

  def self.dropdown_display
    "title"
  end
end
