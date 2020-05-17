module Contactable
  extend ActiveSupport::Concern

  included do
    has_one :contact, as: :contactable, dependent: :destroy
  end
end
