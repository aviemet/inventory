FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { '$trongPassw0rd!' }
    active { true }
    person
    active_company factory: :company
  end
end
