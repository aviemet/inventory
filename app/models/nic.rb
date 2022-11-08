class Nic < ApplicationRecord
  enum nic_type: %i(ethernet wifi fiber cellular)

  attribute :nic_type, default: :wifi

  tracked

  validates_presence_of :nic_type
  # validates_presence_of :item

  belongs_to :item, class_name: "Asset"
  has_many :ips, ->{ where active: true }, class_name: "IpLease"
  has_many :ip_leases

  accepts_nested_attributes_for :ips
end
