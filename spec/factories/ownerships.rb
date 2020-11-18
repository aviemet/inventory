FactoryBot.define do
  factory :ownership do
    company
    department
    ownable factory: :item
  end
end
