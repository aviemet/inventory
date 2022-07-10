class AssignmentBlueprint < ApplicationBlueprint
  fields :assignable_type,
         :assignable_id,
         :assign_toable_type,
         :assign_toable_id,
         :qty,
         :status,
         :assigned_at,
         :returned_at,
         :expected_at,
         :notes,
         :active,
         :created_by_id,
         :created_at,
         :updated_at

  view :associations do
    association :assign_toable, blueprint: ->(assign_toable) { assign_toable.blueprint }, default: {}
  end

  view :new do
    field :assign_toable_type, default: :Person
    excludes :id, :created_at, :updated_at
  end
end
