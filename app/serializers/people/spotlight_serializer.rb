class People::SpotlightSerializer < ApplicationSerializer
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
    :location_id,
    id: { type: :string },
  )

  type :string
  def name
    "#{person.first_name} #{person.last_name}".strip
  end
end
