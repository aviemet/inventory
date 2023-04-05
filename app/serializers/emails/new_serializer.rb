class Emails::NewSerializer < ApplicationSerializer
  object_as :email

  attributes :email,
             :contact_id,
             :category_id

end
