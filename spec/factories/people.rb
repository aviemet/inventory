FactoryBot.define do
  factory :person do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    employee_number { Faker::Number.number }
    job_title { Faker::Job.title }
    active { true }

    transient do
      company { true }
    end

    after(:build) do |person, options|
      if person&.user&.company
        person.company = person.user.company
      elsif options.company == true
        person.company = create(:company)
      elsif options.company
        person.company = options.company
      end

      if person.company
        person.location = create(:location, company: person.company)
      end
    end

  end
end
