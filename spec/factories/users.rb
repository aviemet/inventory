FactoryBot.define do
  factory :user do
    password { '$trongPassw0rd!' }
    email { Faker::Internet.email }

    transient do
      confirmed { false }
      company { true }
      person { true }
    end

    after(:build) do |user, options|
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
