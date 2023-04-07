module Ownable::Many
  extend ActiveSupport::Concern

  included do
    has_many :owners, as: :ownable, class_name: 'Ownership'
    has_many :companies, through: :owners
    has_many :departments, through: :owners

    validates_presence_of :company
  end
end
