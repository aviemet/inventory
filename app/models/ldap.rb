class Ldap < ApplicationRecord
  tracked
  resourcify

  attribute :port, default: 389

  validates :name, presence: true
  validates :host, presence: true
  validates :port, presence: true
  validates :username, presence: true

  belongs_to :company
end
