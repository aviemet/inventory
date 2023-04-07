class People::ShowSerializer < ApplicationSerializer
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

  has_one :contact, serializer: ContactSerializer
  has_many :possessions, serializer: AssignmentSerializer
  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :licenses, serializer: LicenseSerializer
  has_many :activities, serializer: ActivitySerializer
  belongs_to :manager, serializer: PersonSerializer
  belongs_to :user, serializer: UserSerializer
  belongs_to :department, serializer: DepartmentSerializer
end
