class Smtps::FormDataSerializer < ApplicationSerializer
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
  )
end
