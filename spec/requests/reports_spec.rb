require 'rails_helper'

RSpec.describe "Reports" do
  describe "GET /index" do
    login_admin

    it "renders" do
      get reports_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Reports/Index'
    end
  end
end
