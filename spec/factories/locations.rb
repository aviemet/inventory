FactoryBot.define do
  factory :location do
    name { Faker::Address.community }

    transient do
      company { true }
    end

    after(:build) do |location, options|
      if options.company == true
        location.company = create(:company)
      elsif options.company
        location.company = options.company
      end
    end
  end
end
