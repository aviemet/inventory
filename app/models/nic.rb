class Nic < ApplicationRecord
  enum nic_type: [:ethernet, :wifi, :fiber, :cellular]

  after_initialize :set_defaults

  tracked

  validates_presence_of :nic_type

  belongs_to :item
  has_many :ips, ->{ where active: true }, class_name: "IpLease"
  has_many :ip_leases

  accepts_nested_attributes_for :ips

  private

  def set_defaults
    self.nic_type ||= :wifi
  end
end
