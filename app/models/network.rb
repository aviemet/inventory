class Network < ApplicationRecord
  include Ownable

  audited

  validates :ip, presence: true
  validate :is_network

  private

  def is_network
    unless ip&.network?
      errors.add(:ip, "Must be a valid network with nothing to the right of the network bits")
    end
  end
end
