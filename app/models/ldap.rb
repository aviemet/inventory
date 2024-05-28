# == Schema Information
#
# Table name: ldaps
#
#  id            :bigint           not null, primary key
#  domain        :string
#  host          :string
#  name          :string           not null
#  password      :string
#  port          :string
#  sync_interval :string
#  tree_base     :string
#  user_search   :string
#  username      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  company_id    :bigint           not null
#
# Indexes
#
#  index_ldaps_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#
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
