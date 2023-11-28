class Nic < ApplicationRecord
  enum nic_type: {:ethernet => 0, :wifi => 1, :fiber => 2, :cellular => 3}

  attribute :nic_type, default: :wifi

  tracked
  resourcify

  validates :nic_type, presence: true
  # validates_presence_of :item

  belongs_to :item, class_name: "Asset"
  has_many :ips, ->{ where active: true }, class_name: "IpLease", inverse_of: :nic, dependent: :destroy
  has_many :ip_leases, inverse_of: :nic, dependent: :destroy

  accepts_nested_attributes_for :ips
end
