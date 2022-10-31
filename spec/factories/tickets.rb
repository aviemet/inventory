FactoryBot.define do
  factory :ticket do
    subject { Faker::ChuckNorris.fact }
    description { Faker::Movies::HitchhikersGuideToTheGalaxy.quote }
    created_by factory: :person, strategy: :create
  end
end
