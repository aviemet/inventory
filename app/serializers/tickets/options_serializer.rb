class Tickets::OptionsSerializer < ApplicationSerializer
  object_as :ticket

  attributes :id, :subject
end
