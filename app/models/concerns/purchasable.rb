module Purchasable
  extend ActiveSupport::Concern

  included do
    has_one :purchase, as: :purchasable, dependent: :nullify
  end
end
