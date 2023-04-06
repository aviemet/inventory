class PersonSerializer < ApplicationSerializer
  object_as :person

  attributes(
    :first_name,
    :middle_name,
    :last_name,
    :active,
    :employee_number,
    :job_title,
    :manager_id,
    :user_id,
    :created_at,
    :updated_at,
  )

  attribute :name do
    "#{person.first_name} #{person.last_name}".strip
  end
end
