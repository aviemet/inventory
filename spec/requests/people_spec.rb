require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/people", type: :request do
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

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all people" do
        person = create(:person, { company: User.first.active_company })

        get people_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(person.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of people" do
        person1 = create(:person, { first_name: "Include", company: User.first.active_company })
        person2 = create(:person, { first_name: "Exclue", company: User.first.active_company })

        get people_url, params: { search: person1.first_name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(person1.first_name))
        expect(response.body).not_to include(CGI.escapeHTML(person2.first_name))
      end
    end

    context "new page" do
      it "displays form to create a new person" do
        get new_person_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a person" do
        person = create(:person, { company: User.first.active_company })

        get edit_person_url(person)

        expect(response).to have_http_status(:ok)
      end
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
        }.to change(Person, :count).by(0)
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
        person = create(:person, { company: User.first.active_company })
        patch person_url(person), params: { person: { name: "Changed" } }

        person.reload

        expect(person.name).to eq("Changed")
        expect(response).to redirect_to(person_url(person))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit person page" do
        person = create(:person)
        patch person_url(person), params: invalid_attributes
        expect(response).to redirect_to edit_person_url(person)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested person" do
      person = create(:person)
      expect {
        delete person_url(person)
      }.to change(Person, :count).by(-1)
    end

    it "redirects to the people list" do
      person = create(:person)
      delete person_url(person)
      expect(response).to redirect_to(people_url)
    end
  end
end
