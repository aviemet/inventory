FactoryBot.define do
  factory :assignment do
    active { true }
    qty { Faker::Number.digit }
    status { 1 }
    assigned_at { Time.current }
    created_by factory: :user

    transient do
      assignable { nil }
      assign_toable { nil }
    end

    assignable_id { assignable.id }
    assignable_type { assignable.class.name.camelize }

    assign_toable_id { assign_toable.id }
    assign_toable_type { assign_toable.class.name.camelize }
  end
end
