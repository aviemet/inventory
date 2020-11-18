FactoryBot.define do
  factory :phone do
    number { Faker::PhoneNumber.cell_phone }
    extension { Faker::PhoneNumber.extension }
    contact
    phone_type
  end
end
