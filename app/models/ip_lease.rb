class IpLease < ApplicationRecord
  tracked

  belongs_to :nic
  has_one :item, through: :nic

  scope :active, -> { where(active: true) }

  def self.in_network(network)
    net_str = case network
              when Network
                network.address.to_string
              when IPAddress
                network.to_string
              when String
                raise ArgumentError.new("Invalid parameter, #{network} is not a valid network. When passing a string, use the format \"10.10.10.0/24\"") unless IPAddress(network).network?
                network
              else
                raise ArgumentError.new("Invalid parameter #{network}: expected one of Network, IpAddress or String in format \"10.10.10.0/24\"")
              end
    self.where("'#{net_str}' >>= address")
  end
end
