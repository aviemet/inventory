class SmtpSerializer < ApplicationSerializer
  object_as :smtp

  attributes(
    :name,
    :address,
    :port,
    :domain,
    :auth,
    :tls,
    :username,
    :password,
    :notes,
    :created_at,
    :updated_at,
  )
end
