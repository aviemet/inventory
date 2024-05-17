# == Schema Information
#
# Table name: ownerships
#
#  id            :bigint           not null, primary key
#  ownable_type  :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  company_id    :bigint           not null
#  department_id :bigint
#  ownable_id    :bigint           not null
#
# Indexes
#
#  index_ownerships_on_company_id                   (company_id)
#  index_ownerships_on_department_id                (department_id)
#  index_ownerships_on_ownable_type_and_ownable_id  (ownable_type,ownable_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (department_id => departments.id)
#
FactoryBot.define do

  factory :ownership do
    company
    department
    for_item

    trait :for_item do
      association :ownable, factory: :item
    end

    trait :for_person do
      association :ownable, factory: :person
    end

    trait :for_accessory do
      association :ownable, factory: :accessory
    end

    trait :for_component do
      association :ownable, factory: :component
    end

    trait :for_consumable do
      association :ownable, factory: :consumable
    end

    trait :for_model do
      association :ownable, factory: :model
    end

    trait :for_vendor do
      association :ownable, factory: :vendor
    end

    trait :for_manufacturer do
      association :ownable, factory: :manufacturer
    end

    trait :for_license do
      association :ownable, factory: :license
    end

    trait :for_location do
      association :ownable, factory: :location
    end

    trait :for_network do
      association :ownable, factory: :network
    end

    trait :for_contract do
      association :ownable, factory: :contract
    end
  end

end
