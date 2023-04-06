class PersonSerializer < ApplicationSerializer
  object_as :person

  attributes :first_name,
             :middle_name,
             :last_name,
             :active,
             :employee_number,
             :job_title,
             :manager_id,
             :user_id,
             :created_at,
             :updated_at

  attribute :name do
    "#{person.first_name} #{person.last_name}".strip
  end

  # view :associations do
  #   association :possessions, serializer: AssignmentSerializer
  #   association :department, serializer: DepartmentSerializer
  #   association :contact, serializer: ContactSerializer
  #   association :items, serializer: ItemSerializer
  #   association :accessories, serializer: AccessorySerializer
  #   association :licenses, serializer: LicenseSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :manager, serializer: PersonSerializer
  #   association :user, serializer: UserSerializer
  # end

  # view :as_options do
  #   only :id, :name

  #   attribute :default_location_id do |person|
  #     person&.location&.id
  #   end
  # end

  # view :new do
  #   excludes :name, :user_id

  #   association :contact, serializer: ContactSerializer, view: :new
  #   association :user, serializer: UserSerializer, view: :as_form_data
  # end

  # view :edit do
  #   excludes :name, :user_id

  #   attribute :department_id do |person|
  #     person.department&.id
  #   end

  #   # association :contact, serializer: ContactSerializer
  #   association :user, serializer: UserSerializer, view: :as_form_data
  # end
end
