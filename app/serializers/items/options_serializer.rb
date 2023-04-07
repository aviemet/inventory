class Items::OptionsSerializer < Assignable::SingleSerializer
  object_as :ip_lease

  attributes(
    :name,
    :default_location_id,
  )

  has_many :ips, serializer: IpLeases::OptionsSerializer, if: ->{ options[:with_ips] }
end
