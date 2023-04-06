class Users::EditSerializer < ApplicationSerializer
  object_as :user

  attributes(
     :email,
     :active_company_id,
     :active,
   )
end
