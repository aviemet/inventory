# == Schema Information
#
# Table name: tickets
#
#  id                 :bigint           not null, primary key
#  description        :text
#  number             :integer          not null
#  priority           :integer
#  subject            :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  asset_id           :bigint
#  created_by_id      :bigint
#  primary_contact_id :bigint
#  status_id          :bigint
#
# Indexes
#
#  index_tickets_on_asset_id            (asset_id)
#  index_tickets_on_created_by_id       (created_by_id)
#  index_tickets_on_number              (number) UNIQUE
#  index_tickets_on_primary_contact_id  (primary_contact_id)
#  index_tickets_on_status_id           (status_id)
#
# Foreign Keys
#
#  fk_rails_...  (asset_id => assets.id)
#  fk_rails_...  (created_by_id => people.id)
#  fk_rails_...  (primary_contact_id => people.id)
#  fk_rails_...  (status_id => ticket_statuses.id)
#
FactoryBot.define do
  factory :ticket do
    subject { Faker::ChuckNorris.fact }
    description { Faker::Movies::HitchhikersGuideToTheGalaxy.quote }

    company
    created_by { association :person, company: company }
  end
end
