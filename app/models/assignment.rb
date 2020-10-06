class Assignment < ApplicationRecord
  belongs_to :assignable, polymorphic: true
  belongs_to :assign_toable, polymorphic: true
end
