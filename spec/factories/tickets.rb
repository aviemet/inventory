FactoryBot.define do
  factory :ticket do
    subject { Faker::ChuckNorris.fact }
    description { Faker::Movies::HitchhikersGuideToTheGalaxy.quote }

    company
    created_by { association :person, company: company }
  end
end
