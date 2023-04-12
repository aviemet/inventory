require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/locations", type: :request do
  def valid_attributes
    {
      location: attributes_for(:location)
    }
  end

  def invalid_attributes
    {
      location: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all locations" do
        location = create(:location, company: @admin.active_company)

        get locations_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(location.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of locations" do
        location1 = create(:location, { name: "Include", company: @admin.active_company })
        location2 = create(:location, { name: "Exclue", company: @admin.active_company })

        get locations_url, params: { search: location1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(location1.name))
        expect(response.body).not_to include(CGI.escapeHTML(location2.name))
      end
    end

    context "new page" do
      it "displays form to create a new location" do
        get new_location_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a location" do
        location = create(:location, company: @admin.active_company)

        get edit_location_url(location)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        location = create(:location, company: @admin.active_company)
        get location_url({ slug: location.slug })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Location and redirects to show page" do
        expect{
          post locations_url, params: valid_attributes
        }.to change(Location, :count).by(1)
        expect(response).to redirect_to(location_url(Location.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Location" do
        expect {
          post locations_url, params: invalid_attributes
        }.to change(Location, :count).by(0)
      end

      it "redirects back to the new location page" do
        post locations_url, params: invalid_attributes
        expect(response).to redirect_to new_location_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested location and redirects to the show page" do
        name_change = "Changed"
        location = create(:location, company: @admin.active_company )
        patch location_url(location.slug), params: { location: { name: name_change } }

        location.reload

        expect(location.name).to eq(name_change)
        expect(response).to redirect_to(location_url(location))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit location page" do
        location = create(:location, company: @admin.active_company)
        patch location_url(location), params: invalid_attributes
        expect(response).to redirect_to edit_location_url(location)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested location" do
      location = create(:location, company: @admin.active_company)
      expect {
        delete location_url({slug: location.slug})
      }.to change(Location, :count).by(-1)
    end

    it "redirects to the locations list" do
      location = create(:location, company: @admin.active_company)
      delete location_url({slug: location.slug})
      expect(response).to redirect_to(locations_url)
    end
  end
end
