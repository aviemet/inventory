class Ldap < ApplicationRecord
  resourcify
  audited

  attribute :host, default: '127.0.0.1'
  attribute :port, default: 389

  validates_presence_of :name
  validates_presence_of :host
  validates_presence_of :port

  belongs_to :company
end
