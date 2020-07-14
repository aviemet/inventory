class Assignment < ApplicationRecord
  belongs_to :assignable, polymorphic: true
  belongs_to :receivable, polymorphic: true
end
