require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Orders", :inertia do
  describe "GET /index" do
    login_admin

    it "renders" do
      get orders_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Orders/Index'
    end
  end
end
