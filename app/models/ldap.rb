class Ldap < ApplicationRecord
  resourcify
  audited

  validates_presence_of :host
  validates_presence_of :port
  validates_presence_of :username
  validates_presence_of :password
  validates_presence_of :tree_base

  validates_uniqueness_of :company

  belongs_to :company
end
