# == Schema Information
#
# Table name: documentations
#
#  id                :bigint           not null, primary key
#  body              :text
#  documentable_type :string           not null
#  slug              :string           not null
#  title             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  category_id       :bigint           not null
#  created_by_id     :bigint
#  documentable_id   :bigint           not null
#
# Indexes
#
#  index_documentations_on_category_id    (category_id)
#  index_documentations_on_created_by_id  (created_by_id)
#  index_documentations_on_documentable   (documentable_type,documentable_id)
#  index_documentations_on_slug           (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (created_by_id => people.id)
#
FactoryBot.define do
  factory :documentation do
    title { Faker::Book.title }
    body { Faker::Lorem.paragraph }

    company
    category { association :category, company: company }
    documentable factory: :item, strategy: :create

    trait :for_accessory do
      documentable factory: :accessory, strategy: :create
    end

    trait :for_model do
      documentable factory: :model, strategy: :create
    end

    documentable_id { documentable.id.to_s }
    documentable_type { documentable.class&.name&.camelize }

    after(:stub, &:set_slug)
  end
end
