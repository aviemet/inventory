FactoryBot.define do
  factory :phone_type do
    name { PhoneType.all.sample.name }
  end
end
