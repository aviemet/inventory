# == Schema Information
#
# Table name: ticket_statuses
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  slug        :string           not null
#  status_type :integer          default("open")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_ticket_statuses_on_slug  (slug) UNIQUE
#
FactoryBot.define do
  factory :ticket_status do
    name { "MyString" }
  end
end
