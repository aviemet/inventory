class IpLeaseSerializer < ApplicationSerializer
  attributes :active,
             :created_at,
             :updated_at

  attribute :address do |ip|
    ip.address.to_s
  end

  # view :with_item do
  #   association :item, serializer: ItemSerializer, view: :shallow
  # end

  # view :as_options do
  #   only :id, :address
  # end

end
