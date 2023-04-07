FactoryBot.define do
  factory :ticket do
    subject { Faker::ChuckNorris.fact }
    description { Faker::Movies::HitchhikersGuideToTheGalaxy.quote }

    transient do
      company { create(:company) }
    end

    created_by { association :person, company: company }
  end
end
