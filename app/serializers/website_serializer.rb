# == Schema Information
#
# Table name: websites
#
#  id         :bigint           not null, primary key
#  name       :string
#  notes      :string
#  url        :string
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
class WebsiteSerializer < ApplicationSerializer
  object_as :website

  attributes(
    :url,
    :name,
    :notes,
    :contact_id,
    :created_at,
    :updated_at,
  )

  has_many :activities, serializer: ActivitySerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :category, serializer: CategorySerializer
end
