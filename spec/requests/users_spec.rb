require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Users", type: :request, inertia: true do
  let(:password) { '$trongPassw0rd!' }
  let(:confirmed_user) { create(:user, password: password, confirmed: true) }
  let(:unconfirmed_user) { create(:user, password: password) }

  def confirmed_user_params
    { user: {
      email: confirmed_user.email,
      password: password,
    } }
  end

  def unconfirmed_user_params
    { user: {
      email: unconfirmed_user.email,
      password: password,
    } }
  end

  def invalid_user_params
    { user: {
      email: 'not@ok.com',
      password: 'abc123',
    } }
  end

  describe "POST /login" do
    context "confirmed with valid credentials" do
      it "logs in the user" do
        post user_session_url, params: confirmed_user_params
        expect(response).to redirect_to root_url
      end
    end

    context "unconfirmed with valid credentials" do
      it "redirects to the confirm email page" do
        post user_session_url, params: unconfirmed_user_params
        expect_inertia.to render_component 'Public/Devise/Confirmations/New'
      end
    end

    context "invalid credentials" do
      it "redirects back to the login page" do
        post user_session_url, params: invalid_user_params
        expect_inertia.to render_component 'Public/Devise/Login'
      end
    end
  end

end
