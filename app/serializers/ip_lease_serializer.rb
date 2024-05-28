# == Schema Information
#
# Table name: ip_leases
#
#  id         :bigint           not null, primary key
#  active     :boolean          default(TRUE), not null
#  address    :inet
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  nic_id     :bigint           not null
#
# Indexes
#
#  index_ip_leases_on_nic_id  (nic_id)
#
# Foreign Keys
#
#  fk_rails_...  (nic_id => nics.id)
#
class IpLeaseSerializer < ApplicationSerializer
  object_as :ip_lease

  attributes(
    :active,
  )

  attribute :address do
    ip_lease.address.to_s
  end
end
