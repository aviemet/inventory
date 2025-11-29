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
      ownable factory: %i[item]
    end

    trait :for_person do
      ownable factory: %i[person]
    end

    trait :for_accessory do
      ownable factory: %i[accessory]
    end

    trait :for_component do
      ownable factory: %i[component]
    end

    trait :for_consumable do
      ownable factory: %i[consumable]
    end

    trait :for_model do
      ownable factory: %i[model]
    end

    trait :for_vendor do
      ownable factory: %i[vendor]
    end

    trait :for_manufacturer do
      ownable factory: %i[manufacturer]
    end

    trait :for_license do
      ownable factory: %i[license]
    end

    trait :for_location do
      ownable factory: %i[location]
    end

    trait :for_network do
      ownable factory: %i[network]
    end

    trait :for_contract do
      ownable factory: %i[contract]
    end
  end

end
