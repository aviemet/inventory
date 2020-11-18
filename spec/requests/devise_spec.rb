require 'rails_helper'

RSpec.describe "Authentication", type: :request do
  describe "Global app authentication" do
    skip it "denies access if not logged in" do
      Rails.application.routes.routes.map do |route|
        next unless should_test_this_route(route)

        response = get public_send("#{controller_name(route)}_path")
        expect(response).to redirect_to new_user_session_url
      end
    end
  end
end

def should_test_this_route(route)
  ignore_routes_for = ["rails", "devise", "active_storage", "action_mailbox"]

  route.verb == "GET" && route.name && !ignore_routes_for.include?(controller_name(route)) && route.name != "root"
end

def controller_name(route)
  route.defaults[:controller].gsub(%r{/.*$}, '')
end
