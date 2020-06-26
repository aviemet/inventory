module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable
    has_many :items, through: :assignments
  end
end
