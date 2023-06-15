module Documentable
  extend ActiveSupport::Concern

  included do
    has_many :documentations, as: :documentable
  end
end
