class Nic < ApplicationRecord
  audited

  belongs_to :item
  has_many :ips, class_name: "IpLease"

  accepts_nested_attributes_for :ips
end
