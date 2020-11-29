FactoryBot.define do
  factory :ip_lease do
    nic { nil }
    ip { "" }
    active { false }
  end
end
