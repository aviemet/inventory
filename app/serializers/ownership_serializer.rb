class OwnershipSerializer < ApplicationSerializer
  object_as :ownership

  attributes :company_id, :department_id

  # view :associations do
  #   association :company, serializer: CompanySerializer
  #   association :department, serializer: DepartmentSerializer
  # end
end
