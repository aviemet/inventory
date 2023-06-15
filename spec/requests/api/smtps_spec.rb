require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Api::Smtps", type: :request do
  describe "POST /test" do
    login_admin

    it "doesn't authenticate with invalid credentials" do
      smtp = build(:smtp)

      post api_smtp_test_path, params: { smtp: smtp.as_json }

      response_body = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(response_body["success"]).to be(false)
    end

    # it "authenticates with valid credentials" do
    #   smtp = create(:smtp, {
    #     host: 'smtp.gmail.com',
    #   },)

    #   get api_smtp_test_path(smtp.id)

    #   response_body = JSON.parse(response.body)

    #   expect(response).to have_http_status(200)
    #   expect(response_body["success"]).to be(true)
    # end
  end
end
