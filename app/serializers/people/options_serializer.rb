class People::OptionsSerializer < ApplicationSerializer
  object_as :person

  attributes :id

  type :string
  def name
    "#{person.first_name} #{person.last_name}".strip
  end

  type :number
  def default_location_id
    person&.location&.id
  end
end
