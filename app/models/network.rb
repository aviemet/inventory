class Network < ApplicationRecord
  include Ownable

  validates :ip, presence: true
  validate :ip_is_not_a_host

  def self.dropdown_display
    "name"
  end

  private

  def ip_is_not_a_host
    return unless ip.prefix == 32

    errors.add(:ip, "Must be a network, not a host")
  end
end
