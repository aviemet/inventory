require "rails_helper"
require_relative "../support/devise"

RSpec.describe "PersonGroups", :inertia do
  def valid_attributes
    {
      person_group: attributes_for(:person_group)
    }
  end

  def invalid_attributes
    {
      person_group: {
        name: "",
      }
    }
  end

  describe "GET /index" do
    login_admin

    describe "index page" do
      it "lists all person_groups" do
        person_group = create(:person_group, { company: @admin.active_company })

        get person_groups_url

        expect(response).to have_http_status(:ok)
        expect_inertia.to render_component "PersonGroups/Index"
        expect(response.body).to include(CGI.escapeHTML(person_group.name))
      end
    end
  end

  describe "GET /show" do
    login_admin

    it "renders" do
      person_group = create(:person_group, company: @admin.active_company)

      get person_group_url({ slug: person_group.slug })

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "PersonGroups/Show"
    end
  end

  describe "GET /new" do
    login_admin

    it "renders" do
      get new_person_group_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "PersonGroups/New"
    end
  end

  describe "GET /edit" do
    login_admin

    it "renders" do
      person_group = create(:person_group, company: @admin.active_company)

      get edit_person_group_url(person_group)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "PersonGroups/Edit"
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Group and redirects to show page" do
        expect{
          post person_groups_url, params: valid_attributes
        }.to change(PersonGroup, :count).by(1)
        expect(response).to redirect_to(person_group_url(PersonGroup.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Group" do
        expect {
          post person_groups_url, params: invalid_attributes
        }.not_to change(PersonGroup, :count)
      end

      it "redirects back to the new person_group page" do
        post person_groups_url, params: invalid_attributes
        expect(response).to redirect_to new_person_group_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested person_group and redirects to the show page" do
        name_change = "Changed"
        person_group = create(:person_group, company: User.first.active_company )
        patch person_group_url(person_group.slug), params: { person_group: { name: name_change } }

        person_group.reload

        expect(person_group.name).to eq(name_change)
        expect(response).to redirect_to(person_group_url(person_group))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit person_group page" do
        person_group = create(:person_group, company: User.first.active_company)
        patch person_group_url(person_group.slug), params: invalid_attributes
        expect(response).to redirect_to edit_person_group_url(person_group)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested person_group" do
      person_group = create(:person_group, company: User.first.active_company)
      expect {
        delete person_group_url({ slug: person_group.slug })
      }.to change(PersonGroup, :count).by(-1)
    end

    it "redirects to the person_groups list" do
      person_group = create(:person_group, company: User.first.active_company)
      delete person_group_url({ slug: person_group.slug })
      expect(response).to redirect_to(person_groups_url)
    end
  end
end
