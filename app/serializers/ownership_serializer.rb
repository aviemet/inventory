class OwnershipSerializer < ApplicationSerializer
  object_as :ownership

  attributes :company_id, :department_id
end
