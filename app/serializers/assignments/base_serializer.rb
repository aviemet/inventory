class Assignments::BaseSerializer < ApplicationSerializer
  object_as :assignment

  attributes :assignable_type,
             :assignable_id,
             :assign_toable_type,
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

  association :assign_toable, serializer: ->(assign_toable) { assign_toable.serializer }, default: {}
  association :assignable, serializer: ->(assignable) { assignable.serializer }, default: {}
end
