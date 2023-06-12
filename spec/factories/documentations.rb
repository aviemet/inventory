FactoryBot.define do
  factory :documentation do
    title { Faker::Book.title }
    body { Faker::Lorem.paragraph }

    company
    documentable factory: :item

    documentable_id { documentable&.id }
    documentable_type { documentable&.class&.name&.camelize }
  end
end
