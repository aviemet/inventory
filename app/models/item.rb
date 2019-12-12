class Item < ApplicationRecord
  include Ownable
  
  belongs_to :purchase, optional: true
  has_one :category, class_name: "ItemCategory"
  has_one :brand
  has_many :interfaces
  has_many :items_assignments
  has_many :people, through: :items_assignments
end
