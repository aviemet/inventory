class IpLease < ApplicationRecord
  audited

  belongs_to :nic
end
