class Nic < ApplicationRecord
  audited

  belongs_to :item
  has_many :ips, class_name: "IpLease"
end
