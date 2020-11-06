FactoryBot.define do
  factory :nics_ip do
    nic
    ip
    active { true }
  end
end
