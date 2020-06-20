class Nic < ApplicationRecord
  belongs_to :item
  has_many :ips, through: :nics_ip
end
