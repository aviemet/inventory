# == Schema Information
#
# Table name: networks
#
#  id         :bigint           not null, primary key
#  address    :cidr             not null
#  dhcp_end   :inet
#  dhcp_start :inet
#  gateway    :inet
#  name       :string           not null
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  vlan_id    :integer
#
class Network < ApplicationRecord
  include Ownable
  include Documentable

  include PgSearchable
  pg_search_config(
    against: [:name, :address, :gateway, :vlan_id],
    enable_multisearch: true,
  )

  tracked
  resourcify

  validates :name, presence: true
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
