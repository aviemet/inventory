require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Settings::Appearances" do
  describe "GET /index" do
    login_admin

    it "renders" do
      get settings_appearance_url

      expect(response).to have_http_status(:ok)
    end
  end
end
