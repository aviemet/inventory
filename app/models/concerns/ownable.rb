module Ownable
  extend ActiveSupport::Concern

  included do
    has_one :owner, as: :ownable, class_name: 'Ownership', dependent: :destroy
    has_one :company, through: :owner
    has_one :department, through: :owner

    accepts_nested_attributes_for :company
    accepts_nested_attributes_for :department
  end
end
