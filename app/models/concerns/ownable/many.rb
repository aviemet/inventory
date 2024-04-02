module Ownable::Many
  extend ActiveSupport::Concern

  included do
    has_many :owners, as: :ownable, class_name: 'Ownership', dependent: :destroy
    has_many :companies, through: :owners
    has_many :departments, through: :owners

    validates :company, presence: true
  end
end
