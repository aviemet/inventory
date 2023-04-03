require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Pages", type: :request do
  describe "GET /dashboard" do
    login_admin

    context "dashboard page" do
      it "lists renders" do
        get dashboard_url

        expect(response).to have_http_status(:ok)
      end
    end
  end
end
