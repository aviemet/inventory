FactoryBot.define do
  factory :documentation do
    title { Faker::Book.title }
    body { Faker::Lorem.paragraph }

    company
    association :documentable, factory: :item, strategy: :create

    trait :for_accessory do
      association :documentable, factory: :accessory, strategy: :create
    end

    trait :for_model do
      association :documentable, factory: :model, strategy: :create
    end

    documentable_id { documentable.id.to_s }
    documentable_type { documentable.class&.name&.camelize }
  end
end
