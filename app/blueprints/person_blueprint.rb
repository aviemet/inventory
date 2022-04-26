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
	  # association :owner, blueprint: OwnershipBlueprint
	  # association :company, blueprint: CompanyBlueprint
	  association :department, blueprint: DepartmentBlueprint
	  # association :contact, blueprint: ContactBlueprint
	  # association :addresses, blueprint: AddressBlueprint
	  # association :phones, blueprint: PhoneBlueprint
	  # association :emails, blueprint: EmailBlueprint
	  # association :websites, blueprint: WebsiteBlueprint
	  # association :posessions, blueprint: AssignmentBlueprint
	  association :items, blueprint: ItemBlueprint
	  association :accessories, blueprint: AccessoryBlueprint
	  association :licenses, blueprint: LicenseBlueprint
	  # association :fieldset_associations, blueprint: FieldsetAssociationBlueprint
	  association :audits, blueprint: AuditBlueprint
	  association :manager, blueprint: PersonBlueprint
	  # association :user, blueprint: UserBlueprint

  end
end
