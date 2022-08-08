FactoryBot.define do
  factory :user do
    transient do
      password { '$trongPassw0rd!' }
      confirmed { false }
      company { true }
      person { true }
    end

    after(:build) do |user, options|
      user.password = options.password
    end

    email { Faker::Internet.email }
    active { true }

    after(:create) do |user, options|
      if options.person
        user.person = create(:person)
      end
      if options.company
        company = create(:company)
        user.add_role :admin, company
        user.active_company = company
      end
      user.confirm if options.confirmed
    end
  end
end
