FactoryBot.define do
  factory :address_type do
    name { AddressType.all.sample.name }
  end
end
