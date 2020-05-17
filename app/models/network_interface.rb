class NetworkInterface < ApplicationRecord
  belongs_to :item

  has_many :interfaces_ipv4s
  has_many :interfaces_ipv6s
  has_many :ipv4_addresses, through: :interfaces_ipv4s
  has_many :ipv6_addresses, through: :interfaces_ipv6s
end
