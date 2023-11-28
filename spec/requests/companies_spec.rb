require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Companies" do
  describe "GET /" do
    login_admin

    it "renders" do
      get companies_url
      expect(response).to have_http_status(:ok)
    end
  end

  describe "GET /show" do
    login_admin

    it "renders" do
      get company_url({ slug: Company.first.slug })
      expect(response).to have_http_status(:ok)
    end
  end
end
