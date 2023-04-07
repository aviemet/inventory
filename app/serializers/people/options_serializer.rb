class People::OptionsSerializer < ApplicationSerializer
  object_as :person

  attribute :name do
    "#{person.first_name} #{person.last_name}".strip
  end

  attribute :default_location_id do
    person&.location&.id
  end
end
