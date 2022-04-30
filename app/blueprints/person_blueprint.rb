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

  field :name do |person|
    "#{person.first_name} #{person.last_name}"
  end

  view :associations do
	  association :department, blueprint: DepartmentBlueprint
	  association :contact, blueprint: ContactBlueprint
	  association :items, blueprint: ItemBlueprint
	  association :accessories, blueprint: AccessoryBlueprint
	  association :licenses, blueprint: LicenseBlueprint
	  association :audits, blueprint: AuditBlueprint
	  association :manager, blueprint: PersonBlueprint
	  association :user, blueprint: UserBlueprint
  end

  view :as_options do
    fields :id
		
		field :name do |person|
			"#{person.first_name} #{person.last_name}"
		end
  end
end
