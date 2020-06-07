module Fieldable
  extend ActiveSupport::Concern

  included do
    has_many :fieldset_associations, as: :fieldable, dependent: :destroy
  end
end
