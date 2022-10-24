FactoryBot.define do
  factory :item do
    name { Faker::Device.model_name }
    asset_tag { Faker::Blockchain::Bitcoin.unique.address }
    serial { Faker::Blockchain::Bitcoin.unique.address }
    cost { Faker::Commerce.price(range: 500..2000.0) }
    purchased_at { Time.zone.yesterday.end_of_day }
    requestable { true }
    notes { Faker::Lorem.sentence }
    default_location factory: :location
    status_type

    transient do
      company { company || create(:company) }
    end

    vendor { association :vendor, company: company }
    model { association :model, company: company }
  end
end
