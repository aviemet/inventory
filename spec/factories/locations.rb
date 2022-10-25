FactoryBot.define do
  factory :location do
    name { Faker::Address.community }
    
    company
    
    after(:build) do |location|
      location.set_slug
    end

    after(:build_stubbed) do |location|
      location.set_slug
    end
  end
end
