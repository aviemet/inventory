class SmtpSerializer < ApplicationSerializer
  object_as :smtp

  attributes(
    :name,
    :address,
    :host,
    :port,
    :domain,
    :security,
    :username,
    :password,
    :notes,
    :created_at,
    :updated_at,
  )
end
