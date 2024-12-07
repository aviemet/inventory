require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Pages", :inertia do
  describe "GET /dashboard" do
    login_admin

    it "renders" do
      get dashboard_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Pages/Dashboard'
    end
  end
end
