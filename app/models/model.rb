class Model < ApplicationRecord
  include Fieldable

  slug :name

  belongs_to :manufacturer
  belongs_to :category

  validates_presence_of :name
end
