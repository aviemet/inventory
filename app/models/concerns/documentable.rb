module Documentable
  extend ActiveSupport::Concern

  included do
    has_many :documentations, as: :documentable, dependent: :nullify
  end

  # self.documentable_types = %w(Asset Company Contract Department License Location Manufacturer Model Network Person Vendor)
end
