class Items::OptionsSerializer < ApplicationSerializer
  object_as :item

  attributes(
    :id,
    :name,
    :default_location_id,
  )

  has_many :ips, serializer: IpLeases::OptionsSerializer, if: ->{ options[:with_ips] }
end
