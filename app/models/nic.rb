class Nic < ApplicationRecord
  belongs_to :item
  has_many :ips, class_name: "IpLease"
end
