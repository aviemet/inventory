module Purchasable
  extend ActiveSupport::Concern

  included do
    has_one :purchase, as: :purchasable
  end
end
