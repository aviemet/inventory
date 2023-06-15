require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Settings::Tickets", type: :request do
  describe "GET /index" do
    login_admin

    it "renders" do
      get settings_tickets_url

      expect(response).to have_http_status(:ok)
    end
  end
end
