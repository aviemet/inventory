FactoryBot.define do
  factory :documentation do
    title { Faker::Book.title }
    body { Faker::Lorem.paragraph }

    company

    trait :for_item do
      association :documentable, factory: :item, strategy: :create
    end

    trait :for_accessory do
      association :documentable, factory: :accessory, strategy: :create
    end

    trait :for_model do
      association :documentable, factory: :model, strategy: :create
    end

    documentable_id { documentable.id }
    documentable_type { documentable.class&.name&.camelize }
  end
end
