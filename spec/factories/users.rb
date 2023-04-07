FactoryBot.define do
  factory :user do
    password { '$trongPassw0rd!' }
    email { Faker::Internet.unique.email }

    transient do
      confirmed { true }
      company { create(:company) }
    end

    person { association :person, company: company }

    after(:build) do |user, options|
      user.add_role :admin, options.company
      user.active_company = options.company

      user.confirm if options.confirmed
    end

  end
end
