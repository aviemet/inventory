FactoryBot.define do
  factory :ticket_message do
    ticket
    body { "MyText" }
  end
end
