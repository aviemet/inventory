class Users::FormDataSerializer < ApplicationSerializer
  object_as :user

  attributes(
    :email,
    :active_company_id,
    :active,
  )
end
