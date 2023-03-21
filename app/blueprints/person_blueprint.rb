class PersonBlueprint < ApplicationBlueprint
  fields :first_name,
         :middle_name,
         :last_name,
         :active,
         :employee_number,
         :job_title,
         :manager_id,
         :created_at,
         :updated_at

  include_view :name

  view :name do
    field :name do |person|
      "#{person.first_name} #{person.last_name}" if person.first_name && person.last_name
    end
  end

  view :associations do
    association :possessions, blueprint: AssignmentBlueprint
    association :department, blueprint: DepartmentBlueprint
    association :contact, blueprint: ContactBlueprint
    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :licenses, blueprint: LicenseBlueprint
    association :activities, blueprint: ActivityBlueprint
    association :manager, blueprint: PersonBlueprint
    association :user, blueprint: UserBlueprint
  end

  view :as_options do
    only :id
    include_view :name

    field :default_location_id do |person|
      person&.location&.id
    end
  end

  view :new do
    excludes :updated_at, :created_at

    # association :contact, blueprint: ContactBlueprint
    association :user, blueprint: UserBlueprint, view: :as_form_data
  end

  view :edit do
    excludes :updated_at, :created_at

    field :department_id do |person|
      person.department&.id
    end

    # association :contact, blueprint: ContactBlueprint
    association :user, blueprint: UserBlueprint, view: :as_form_data
  end
end
