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
      if options.company == true
        company = create(:company)
        user.add_role :admin, company
        user.active_company = company
      elsif options.company
        user.add_role :admin, options.company
        user.active_company = options.company
      end

      if options.person == true
        ap({ company: user&.active_company })
        user.person = create(:person, company: user&.active_company)
      elsif options.person
        user.person = options.person
      end

      user.confirm if options.confirmed
    end

  end
end
