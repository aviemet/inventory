module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable
    has_many :people, through: :assignments, source: :receivable, source_type: "Person"
    has_many :items, through: :assignments, source: :receivable, source_type: "Item"
    has_many :locations, through: :assignments, source: :receivable, source_type: "Location"
    has_many :departments, through: :assignments, source: :receivable, source_type: "Department"
  end
end
