class Nic < ApplicationRecord
  enum nic_type: {
    ethernet: 0,
    wifi: 1,
    fiber: 2,
  }

  audited

  validates_presence_of :nic_type

  belongs_to :item
  has_many :ips, ->{ where active: true }, class_name: "IpLease"
  has_many :ip_leases

  accepts_nested_attributes_for :ips
end
