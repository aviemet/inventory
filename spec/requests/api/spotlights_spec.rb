require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Api::Spotlights", type: :request do
  describe "GET /index" do
    login_admin

    it "responds with many records as json" do
      get api_spotlights_url

      expect(response.body).to include("items")
      expect(response.body).to include("accessories")
      expect(response.body).to include("components")
      expect(response.body).to include("consumables")
      expect(response.body).to include("licenses")
      expect(response.body).to include("people")
      expect(response.body).to include("tickets")
      expect(response.body).to include("networks")
      expect(response.body).to include("vendors")
      expect(response.body).to include("contracts")
    end
  end
end
