require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Orders", type: :request do
  describe "GET /" do
    login_admin

    context "index page" do
      it "lists renders" do
        get orders_url

        expect(response).to have_http_status(:ok)
      end
    end
  end
end
