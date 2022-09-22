class OwnershipBlueprint < ApplicationBlueprint
  fields :company_id, :department_id

  view :associations do
    association :company, blueprint: CompanyBlueprint
    association :department, blueprint: DepartmentBlueprint
  end
end
