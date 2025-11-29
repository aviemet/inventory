require "rails_helper"
require_relative "../../support/devise"

RSpec.describe "Settings::Notifications", :inertia do
  describe "GET /index" do
    login_admin

    it "renders" do
      get settings_notifications_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Settings/Notifications/Index"
    end
  end
end
