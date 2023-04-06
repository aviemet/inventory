class People::NewSerializer < ApplicationSerializer
  object_as :person

  attributes :first_name,
             :middle_name,
             :last_name,
             :active,
             :employee_number,
             :job_title,
             :manager_id

  attribute :name do
    "#{person.first_name} #{person.last_name}".strip
  end

  has_one :contact, serializer: ContactSerializer, view: :new
  belongs_to :user, serializer: UserSerializer, view: :as_form_data
end
