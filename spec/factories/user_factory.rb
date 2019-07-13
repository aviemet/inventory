FactoryBot.define do
	factory :user do
		sequence(:email) { |n| "test@tester.com" }
		sequence(:password) { |n| "secure_password" }
	end
end