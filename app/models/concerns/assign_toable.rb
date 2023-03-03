# Include on a model which can be assigned another model
module AssignToable
  extend ActiveSupport::Concern

  included do
    has_many :possessions, -> { where(active: true) }, class_name: "Assignment", as: :assign_toable
    has_many :assets, through: :possessions, source: :assignable, source_type: "Asset"
    has_many :items, -> { where(type: :Item) }, through: :possessions, source: :assignable, source_type: "Asset"
    has_many :accessories, -> { where(type: :Accessory) }, through: :possessions, source: :assignable, source_type: "Asset"
    has_many :components, -> { where(type: :Component) }, through: :possessions, source: :assignable, source_type: "Asset"
    has_many :consumables, -> { where(type: :Consumable) }, through: :possessions, source: :assignable, source_type: "Asset"
    has_many :licenses, through: :possessions, source: :assignable, source_type: "License"
  end
end
