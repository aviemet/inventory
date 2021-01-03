require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Request responses", type: :request do
  describe "Page responeses behind authentication" do
    it "denies access if not logged in" do
      Rails.application.routes.routes.map do |route|
        next unless should_test_this_route(route)

        response = get public_send("#{route.name}_path")
        expect(response).to redirect_to new_user_session_url
      end
    end
  end

  describe "Page responses when authenticated" do
    login_admin

    it "all GET requests with no required params return success" do
      Rails.application.routes.routes.map do |route|
        next unless should_test_this_route(route)

        get public_send("#{route.name}_path")
        expect(response).to have_http_status(:success)
      end
    end
  end

end

def should_test_this_route(route)
  ignore_routes_for = ["rails", "devise", "active_storage", "action_mailbox", "pages"]

  is_get_path_with_named_route(route) && !ignore_routes_for.include?(controller_name(route)) && route.required_parts.empty?
end

def controller_name(route)
  route.defaults[:controller].gsub(%r{/.*$}, '')
end

def is_get_path_with_named_route(route)
  route.verb == "GET" && route.name && route.name != "root"
end
