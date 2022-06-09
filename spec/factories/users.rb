FactoryBot.define do
  factory :user do
    transient do
      password { '$trongPassw0rd!' }
      confirmed { false }
    end

    after(:build) do |user, options|
      user.password = options.password
    end

    email { Faker::Internet.email }
    active { true }
    person
    active_company factory: :company

    after(:create) do |user, options|
      user.confirm if options.confirmed
    end
  end
end
