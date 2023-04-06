class People::NewSerializer < ApplicationSerializer
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

  has_one :contact, serializer: Contacts::NewSerializer
  belongs_to :user, serializer: Users::NewSerializer
end
