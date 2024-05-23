class Nics::BasicSerializer < NicSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_many :ips, serializer: IpLeases::BasicSerializer
end
