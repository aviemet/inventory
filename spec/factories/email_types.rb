FactoryBot.define do
  factory :email_type do
    name { EmailType.all.sample.name }
  end
end
