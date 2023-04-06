class Assignments::NewSerializer < ApplicationSerializer
  object_as :assignment

  attributes :assignable_type,
             :assignable_id,
             :assign_toable_id,
             :qty,
             :status,
             :location_id,
             :assigned_at,
             :returned_at,
             :expected_at,
             :notes,
             :active,
             :created_by_id,
             :created_at,
             :updated_at

  attribute :assign_toable_type, default: :Person
end
