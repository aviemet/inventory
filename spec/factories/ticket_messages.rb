FactoryBot.define do
  factory :ticket_message do
    ticket { nil }
    body { "MyText" }
  end
end
