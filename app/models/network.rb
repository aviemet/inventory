class Network < ApplicationRecord
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :address, :gateway, :vlan_id], 
    using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  audited

  validates :address, presence: true
  validate :is_network

  private

  def is_network
    unless address&.network?
      errors.add(:address, "Must be a valid network with nothing to the right of the network bits")
    end
  end
end
