require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Settings::Smtps", :inertia do
  describe "GET /index" do
    login_admin

    it "renders" do
      get settings_smtps_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Settings/Smtps/Index'
    end
  end

  describe "GET /new" do
    login_admin

    it "renders" do
      get new_settings_smtp_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Settings/Smtps/New'
    end
  end

  describe "GET /edit" do
    login_admin

    it "renders" do
      smtp = create(:smtp, company: @admin.active_company)

      get edit_settings_smtp_url(smtp)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Settings/Smtps/Edit'
    end
  end
end
