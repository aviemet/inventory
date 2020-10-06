module AssignToable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assign_toable
    has_many :items, through: :assignments, source: :assignable, source_type: "Item"
    has_many :accessories, through: :assignments, source: :assignable, source_type: "Accessory"
    has_many :licenses, through: :assignments, source: :assignable, source_type: "License"
  end
end
