require "rails_helper"

RSpec.describe IpLease, type: :model do
  subject {
    build(:ip_lease)
  }
end
