# == Schema Information
#
# Table name: warranties
#
#  id         :bigint           not null, primary key
#  length     :integer
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  asset_id   :bigint           not null
#
# Indexes
#
#  index_warranties_on_asset_id  (asset_id)
#
# Foreign Keys
#
#  fk_rails_...  (asset_id => assets.id)
#
FactoryBot.define do
  factory :warranty do
    asset factory: :item
    length { Faker::Number.digit }
  end
end
