class IpLease < ApplicationRecord
  tracked
  resourcify

  belongs_to :nic, inverse_of: :ips
  has_one :item, through: :nic

  scope :active, -> { where(active: true) }

  # Finds IP leases within the specified network.
  #
  # @param [Network, IPAddress, String] network The network to search within.
  # @return [ActiveRecord::Relation] The matching IP leases.
  # @raise [CustomNetworkError] If the network parameter is invalid.
  def self.find_in_network(network)
    net_str = case network
              when Network
                network.address.to_string
              when IPAddress
                network.to_string
              when String
                error_msg = "Invalid parameter, #{network} is not a valid network. When passing a string, use the format \"10.10.10.0/24\""
                raise ArgumentError, error_msg unless IPAddress(network).network?

                network
              else
                raise ArgumentError, "Invalid parameter #{network}: expected one of Network, IpAddress or String in format \"10.10.10.0/24\""
              end
    self.where("'#{net_str}' >>= address")
  end
end
