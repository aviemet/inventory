class People::EditSerializer < ApplicationSerializer
  object_as :person

  attributes(
    :id,
    :first_name,
    :middle_name,
    :last_name,
    :active,
    :employee_number,
    :job_title,
    :manager_id,
  )

  type :number
  def department_id
    person&.department&.id
  end

  type :string
  def name
    "#{person.first_name} #{person.last_name}".strip
  end

  has_one :contact, serializer: Contacts::FormDataSerializer, optional: true
  belongs_to :user, serializer: Users::FormDataSerializer, optional: true
  belongs_to :department, serializer: Departments::OptionsSerializer, optional: true
  belongs_to :manager, serializer: People::OptionsSerializer, optional: true
end
