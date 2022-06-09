FactoryBot.define do
  factory :ownership do
    association :company, strategy: :create
    department
    ownable factory: :item
  end
end
