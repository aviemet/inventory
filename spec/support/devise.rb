require_relative './request_macros'

RSpec.configure do |config|
  config.include Devise::Test::IntegrationHelpers
  config.include Warden::Test::Helpers, type: :request
  config.include Warden::Test::Helpers, type: :policy

  config.extend RequestMacros, type: :request
  config.extend RequestMacros, type: :policy
end
