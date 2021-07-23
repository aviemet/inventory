class Network < ApplicationRecord
  include Ownable

  audited

  validates :address, presence: true
  validate :is_network

  private

  def is_network
    unless address&.network?
      errors.add(:address, "Must be a valid network with nothing to the right of the network bits")
    end
  end
end
