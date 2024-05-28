class Nics::OptionsSerializer < ApplicationSerializer
  object_as :nic

  attributes(
    :id,
    :mac,
    :nic_type,
    :item_id,
  )
end
