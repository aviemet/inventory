require 'rails_helper'

RSpec.describe "Reports", type: :request do
  describe "GET /" do
    login_admin

    context "index page" do
      it "renders" do
        get reports_url

        expect(response).to have_http_status(:ok)
      end
    end
  end
end
