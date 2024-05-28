# == Schema Information
#
# Table name: nics
#
#  id         :bigint           not null, primary key
#  mac        :macaddr
#  nic_type   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  item_id    :bigint           not null
#
# Indexes
#
#  index_nics_on_item_id  (item_id)
#
# Foreign Keys
#
#  fk_rails_...  (item_id => assets.id)
#
FactoryBot.define do
  factory :nic do
    nic_type { ["ethernet", "wifi"].sample }
    item

    trait :mac do
      mac { Faker::Internet.mac_address }
    end
  end
end
