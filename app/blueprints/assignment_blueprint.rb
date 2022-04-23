class AssignmentBlueprint < Blueprinter::Base
  identifier :id

  fields :assignable_type,
         :assignable_id,
         :assign_toable_type,
         :assign_toable_id,
         :qty,
         :status,
         :assigned_at,
         :returned_at,
         :expected_at,
         :note,
         :active,
         :created_by_id,
         :created_at,
         :updated_at
end
