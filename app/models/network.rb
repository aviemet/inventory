class Network < ApplicationRecord
  include Ownable
  include PgSearch::Model
  include Documentable

  multisearchable against: [:name, :address, :gateway, :vlan_id]

  pg_search_scope(
    :search,
    against: [:name, :address, :gateway, :vlan_id],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify

  validates :address, presence: true
  validate :network?

  private

  def network?
    return unless self.address

    if self.address&.prefix != 32 && !self.address&.network?
      self.address = self.address.find_adjacent_subnet
    end

    unless self.address&.network?
      errors.add(:address, "Must be a valid network with nothing to the right of the network bits")
    end
  end
end
