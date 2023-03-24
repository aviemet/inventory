class Ldap < ApplicationRecord
  resourcify
  tracked

  attribute :host, default: '127.0.0.1'
  attribute :port, default: 389

  validates_presence_of :name
  validates_presence_of :host
  validates_presence_of :port
  validates_presence_of :username

  belongs_to :company
end
