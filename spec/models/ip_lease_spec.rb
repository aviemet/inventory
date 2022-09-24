require "rails_helper"

RSpec.describe IpLease, type: :model do
  subject {
    create(:ip_lease)
  }
end
