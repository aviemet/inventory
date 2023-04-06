class Tickets::OptionsSerializer < ApplicationSerializer
  object_as :ticket

  attributes :subject
end
