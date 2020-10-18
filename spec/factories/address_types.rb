FactoryBot.define do
  factory :address_type do
    name { ["Home", "Business", "PO Box"].sample }
  end
end
