FactoryBot.define do
  factory :ticket do
    subject { "MyString" }
    description { "MyText" }
    created_by { nil }
  end
end
