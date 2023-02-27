# Include on a model which can be assigned another model
module AssignToable
  extend ActiveSupport::Concern

  included do
    has_many :assigned_assets, class_name: "Assignment", as: :assign_toable
    has_many :assets, through: :assigned_assets, source: :assignable, source_type: "Asset"
    # has_many :items, through: :assigned_assets, source: :assignable, source_type: "Item"
    has_many :accessories, through: :assigned_assets, source: :assignable, source_type: "Accessory"
    has_many :components, through: :assigned_assets, source: :assignable, source_type: "Component"
    has_many :consumables, through: :assigned_assets, source: :assignable, source_type: "Consumable"
    has_many :licenses, through: :assigned_assets, source: :assignable, source_type: "License"

    def items
      self.assets.where("asset.type", "Item")
    end
  end
end
