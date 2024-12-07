require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Settings::Integrations", :inertia do
  describe "GET /index" do
    login_admin

    it "renders" do
      get settings_integrations_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Settings/Integrations/Index'
    end
  end
end
