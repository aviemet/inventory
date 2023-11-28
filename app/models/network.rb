class Network < ApplicationRecord
  include Ownable
  include Documentable

  multisearchable(
    against: [:name, :address, :gateway, :vlan_id],
    additional_attributes: ->(record) { { label: record.name } },
  )

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
  validate :gateway_within_network?

  before_validation :normalize_network_address

  private

  def normalize_network_address
    return unless self.address

    if self.address&.prefix != 32 && !self.address&.network?
      self.address = self.address.find_adjacent_subnet
    end
  end

  def network?
    unless self.address&.network?
      errors.add(:address, "Must be a valid network")
    end
  end

  def gateway_within_network?
    return false unless self.address&.network?
    return true if self.gateway.nil?

    unless self.address.include? self.gateway
      errors.add(:gateway, "Gateway address must be within the network")
    end
  end
end
