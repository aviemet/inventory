require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Users", :inertia do
  let(:password) { '$trongPassw0rd!' }
  let(:confirmed_user) { create(:user, password: password) }
  let(:unconfirmed_user) { create(:user, password: password, company: false, person: false, confirmed: false) }

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

  ## DEVISE ROUTES TESTS ##

  describe "GET /login" do
    context "with no users in database" do
      it "redirects to the registration page" do
        get new_user_session_url

        expect(response).to redirect_to new_user_registration_url
      end
    end

    context "with a user in database" do
      it "renders the login page" do
        confirmed_user
        get new_user_session_url
        expect_inertia.to render_component 'Public/Devise/Login'
      end
    end
  end

  describe "POST /login" do
    context "with valid credentials and confirmed account" do
      it "logs in the user" do
        post user_session_url, params: confirmed_user_params
        expect(response).to redirect_to root_url
      end
    end

    context "with valid credentials and unconfirmed account" do
      it "redirects to the confirm email page" do
        post user_session_url, params: unconfirmed_user_params
        expect(response).to redirect_to new_user_session_url
        follow_redirect!
        # expect(response).to redirect_to new_user_confirmation_url
        # expect_inertia.to render_component 'Public/Devise/Confirmations/New'
        expect_inertia.to render_component 'Public/Devise/Login'
      end
    end

    context "with invalid credentials" do
      it "redirects back to the login page" do
        user = create(:user, password: password, confirmed: true, company: false, person: false)
        post user_session_url, params: { user: { email: user.email, password: 'Wrong1!' } }
        expect_inertia.to render_component 'Public/Devise/Login'
      end
    end
  end

  describe "POST /users/complete_registration" do
    context "with a confirmed user without company or Person" do

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

  ## APP VIEWS TESTS ##

  describe "GET /index" do
    login_admin

    it "renders" do
      get users_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Users/Index'
      expect(response.body).to include(CGI.escapeHTML(user.first_name))
    end

    context "with search params" do
      it "returns a filtered list of users" do
        user1 = create(:user, { first_name: "Include", company: @admin.active_company })
        user2 = create(:user, { first_name: "Exclude", company: @admin.active_company })

        get users_url, params: { search: user1.first_name }

        expect(response).to have_http_status(:ok)
        expect_inertia.to render_component 'Users/Index'
        expect(response.body).to include(CGI.escapeHTML(user1.first_name))
        expect(response.body).not_to include(CGI.escapeHTML(user2.first_name))
      end
    end

  end

  describe "GET /show" do
    login_admin

    it "renders" do
      get user_url(@admin)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Users/Show'
    end
  end

  describe "GET /new" do
    login_admin

    it "renders" do
      get new_user_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Users/New'
    end
  end

  describe "GET /edit" do
    login_admin

    it "renders" do
      get edit_user_url(@admin)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Users/Edit'
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested user and redirects to user page" do
        user = create(:user)

        patch user_url(user), params: { user: { active: false } }
        user.reload

        expect(user.active).to be(false)
        expect(response).to redirect_to(user_url(user))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit user page" do
        user = create(:user)

        patch user_url(user), params: invalid_user_params

        expect(response).to redirect_to edit_user_url(user)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested user and redirects to index" do
      user = create(:user)
      expect {
        delete user_url(user)
      }.to change(User, :count).by(-1)
      expect(response).to redirect_to(users_url)
    end
  end

end
