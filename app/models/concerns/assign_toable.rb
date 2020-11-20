module AssignToable
  extend ActiveSupport::Concern

  included do
    # Had to use "posessions" since an item can be both assignable and assign_toable
    has_many :posessions, class_name: "Assignment", as: :assign_toable
    has_many :items, through: :posessions, source: :assignable, source_type: "Item"
    has_many :accessories, through: :posessions, source: :assignable, source_type: "Accessory"
    has_many :licenses, through: :posessions, source: :assignable, source_type: "License"
  end
end
