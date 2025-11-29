require "rails_helper"
require_relative "../support/devise"

RSpec.describe "People", :inertia do
  def valid_attributes
    {
      person: attributes_for(:person)
    }
  end

  def invalid_attributes
    {
      person: {
        first_name: "",
      }
    }
  end

  describe "GET /index" do
    login_admin

    describe "index page" do
      it "lists all people" do
        person = create(:person, { company: @admin.active_company })

        get people_url

        expect(response).to have_http_status(:ok)
        expect_inertia.to render_component "People/Index"
        expect(response.body).to include(CGI.escapeHTML(person.name))
      end

      context "with search params" do
        it "returns a filtered list of people" do
          person1 = create(:person, { first_name: "Include", company: @admin.active_company })
          person2 = create(:person, { first_name: "Exclude", company: @admin.active_company })

          get people_url, params: { search: person1.first_name }

          expect(response).to have_http_status(:ok)
          expect_inertia.to render_component "People/Index"
          expect(response.body).to include(CGI.escapeHTML(person1.first_name))
          expect(response.body).not_to include(CGI.escapeHTML(person2.first_name))
        end
      end
    end
  end

  describe "GET /show" do
    login_admin

    it "renders" do
      person = create(:person, company: @admin.active_company)

      get person_url({ id: person.id })

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "People/Show"
    end
  end

  describe "GET /new" do
    login_admin

    it "renders" do
      get new_person_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "People/New"
    end
  end

  describe "GET /edit" do
    login_admin

    it "renders" do
      person = create(:person, company: @admin.active_company)

      get edit_person_url(person)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "People/Edit"
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Person and redirects to show page" do
        expect{
          post people_url, params: valid_attributes
        }.to change(Person, :count).by(1)
        expect(response).to redirect_to(person_url(Person.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Person" do
        expect {
          post people_url, params: invalid_attributes
        }.not_to change(Person, :count)
      end

      it "redirects back to the new person page" do
        post people_url, params: invalid_attributes
        expect(response).to redirect_to new_person_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested person and redirects to the show page" do
        name_change = "Changed"
        person = create(:person, company: @admin.active_company)
        patch person_url(person), params: { person: { first_name: name_change } }

        person.reload

        expect(person.first_name).to eq(name_change)
        expect(response).to redirect_to(person_url(person))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit person page" do
        person = create(:person, company: @admin.active_company)
        patch person_url(person), params: invalid_attributes
        expect(response).to redirect_to edit_person_url(person)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested person" do
      person = create(:person, company: @admin.active_company)
      expect {
        delete person_url(person)
      }.to change(Person, :count).by(-1)
    end

    it "redirects to the people list" do
      person = create(:person, company: @admin.active_company)
      delete person_url(person)
      expect(response).to redirect_to(people_url)
    end
  end
end
