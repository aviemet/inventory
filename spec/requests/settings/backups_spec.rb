require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Settings::Backups", :inertia do
  describe "GET /index" do
    login_admin

    it "renders" do
      get settings_backups_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Settings/Backups/Index'
    end
  end
end
