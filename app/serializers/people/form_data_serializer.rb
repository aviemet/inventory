class People::FormDataSerializer < ApplicationSerializer
  object_as :person

  attributes(
    :first_name,
    :middle_name,
    :last_name,
    :active,
    :employee_number,
    :job_title,
    :manager_id,
  )

  type :number
  attribute :department_id do
    person&.department&.id
  end

  has_one :contact, serializer: Contacts::FormDataSerializer, optional: true
  belongs_to :user, serializer: Users::FormDataSerializer, optional: true
  belongs_to :department, serializer: Departments::FormDataSerializer, optional: true
end
