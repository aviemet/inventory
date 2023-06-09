class Smtps::FormDataSerializer < ApplicationSerializer
  object_as :smtp

  attributes(
    :name,
    :address,
    :port,
    :domain,
    :auth,
    :security,
    :username,
    :password,
    :notes,
  )
end
