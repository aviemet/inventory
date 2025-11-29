require "rails_helper"
require_relative "../support/devise"

RSpec.describe "Companies", :inertia do
  describe "GET /index" do
    login_admin

    it "renders" do
      get companies_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Companies/Index"
    end
  end

  describe "GET /show" do
    login_admin

    it "renders" do
      get company_url({ slug: Company.first.slug })

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Companies/Show"
    end
  end
end
