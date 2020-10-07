module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable
    has_many :people, through: :assignments, source: :assign_toable, source_type: "Person"
    has_many :items, through: :assignments, source: :assign_toable, source_type: "Item"
    has_many :locations, through: :assignments, source: :assign_toable, source_type: "Location"
    has_many :departments, through: :assignments, source: :assign_toable, source_type: "Department"
  end
end
