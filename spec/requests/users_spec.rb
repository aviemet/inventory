require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Users", type: :request, inertia: true do
  let(:password) { '$trongPassw0rd!' }
  let(:confirmed_user) { create(:user, password: password, confirmed: true) }
  let(:unconfirmed_user) { create(:user, password: password, company: false, person: false) }

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
        expect(response).to redirect_to new_user_session_url
        follow_redirect!
        # expect(response).to redirect_to new_user_confirmation_url
        # expect_inertia.to render_component 'Public/Devise/Confirmations/New'
        expect_inertia.to render_component 'Public/Devise/Login'
      end
    end

    context "invalid credentials" do
      it "redirects back to the login page" do
        user = create(:user, password: password, confirmed: true, company: false, person: false)
        post user_session_url, params: { user: { email: user.email, password: 'Wrong1!' } }
        expect_inertia.to render_component 'Public/Devise/Login'
      end
    end
  end

  describe "POST /users/complete_registration" do
    context "confirmed user without company or Person" do

      it "creates a Person and Company record for the new user" do
        user = create(:user, password: password, confirmed: true, company: false, person: false)
        sign_in user

        company_name = Faker::Company.name
        expect {
          post save_complete_registration_url, params: {
            company: {
              name: company_name
            },
            person: {
              first_name: Faker::Name.first_name,
              last_name: Faker::Name.last_name,
            }
          }
        }.to change(Person, :count).by(1)
          .and change(Company, :count).by(1)
      end
    end
  end

end
