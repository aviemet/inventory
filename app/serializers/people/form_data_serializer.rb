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

  has_one :contact, serializer: Contacts::FormDataSerializer
  belongs_to :user, serializer: Users::FormDataSerializer
end
