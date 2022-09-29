class Ldap < ApplicationRecord
  resourcify
  audited

  after_initialize :defaults

  validates_presence_of :name
  validates_presence_of :host
  validates_presence_of :port

  belongs_to :company

  private

  def defaults
    self.host = '127.0.0.1' unless self.host
    self.port = 389 unless self.port
  end
end
