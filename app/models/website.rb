# == Schema Information
#
# Table name: websites
#
#  id         :bigint           not null, primary key
#  name       :string
#  notes      :string
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  contact_id :bigint           not null
#
# Indexes
#
#  index_websites_on_contact_id  (contact_id)
#
# Foreign Keys
#
#  fk_rails_...  (contact_id => contacts.id)
#
class Website < ApplicationRecord
  include Categorizable

  tracked
  resourcify

  validates :url, presence: true

  belongs_to :contact
end
