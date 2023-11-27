require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Settings::AssetTags" do
  describe "GET /index" do
    login_admin

    it "renders" do
      get settings_asset_tags_url

      expect(response).to have_http_status(:ok)
    end
  end
end
