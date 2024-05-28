# == Schema Information
#
# Table name: addresses
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  address_2   :string
#  city        :string
#  country     :string
#  notes       :text
#  postal      :string
#  region      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  contact_id  :bigint           not null
#
# Indexes
#
#  index_addresses_on_category_id  (category_id)
#  index_addresses_on_contact_id   (contact_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (contact_id => contacts.id)
#
class Address < ApplicationRecord
  include Categorizable

  tracked
  resourcify

  belongs_to :contact

  # def self.find_by_category(category)
  #   self.where(category:)
  # end
end
