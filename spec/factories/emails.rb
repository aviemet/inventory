# == Schema Information
#
# Table name: emails
#
#  id          :bigint           not null, primary key
#  email       :string           not null
#  notes       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint
#  contact_id  :bigint           not null
#
# Indexes
#
#  index_emails_on_category_id  (category_id)
#  index_emails_on_contact_id   (contact_id)
#  index_emails_on_email        (email) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (contact_id => contacts.id)
#
FactoryBot.define do
  factory :email do
    email { Faker::Internet.email }
    contact
    category
  end
end
