require "rails_helper"

RSpec.describe IpLease, type: :model do
  subject {
    build_stubbed(:ip_lease)
  }
end
