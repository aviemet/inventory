require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/manufacturers", type: :request do
  def valid_attributes
    {
      manufacturer: attributes_for(:manufacturer)
    }
  end

  def invalid_attributes
    {
      manufacturer: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all manufacturers" do
        manufacturer = create(:manufacturer, company: @admin.active_company )

        get manufacturers_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(manufacturer.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of manufacturers" do
        manufacturer1 = create(:manufacturer, { name: "Include", company: @admin.active_company })
        manufacturer2 = create(:manufacturer, { name: "Exclue", company: @admin.active_company })

        get manufacturers_url, params: { search: manufacturer1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(manufacturer1.name))
        expect(response.body).not_to include(CGI.escapeHTML(manufacturer2.name))
      end
    end

    context "new page" do
      it "displays form to create a new manufacturer" do
        get new_manufacturer_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a manufacturer" do
        manufacturer = create(:manufacturer, company: @admin.active_company)

        get edit_manufacturer_url(manufacturer)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        manufacturer = create(:manufacturer, company: @admin.active_company)
        get manufacturer_url({ slug: manufacturer.slug })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Manufacturer and redirects to show page" do
        expect{
          post manufacturers_url, params: valid_attributes
        }.to change(Manufacturer, :count).by(1)
        expect(response).to redirect_to(manufacturer_url(Manufacturer.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Manufacturer" do
        expect {
          post manufacturers_url, params: invalid_attributes
        }.to change(Manufacturer, :count).by(0)
      end

      it "redirects back to the new manufacturer page" do
        post manufacturers_url, params: invalid_attributes
        expect(response).to redirect_to new_manufacturer_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested manufacturer and redirects to the show page" do
        name_change = "Changed"
        manufacturer = create(:manufacturer, company: @admin.active_company )
        patch manufacturer_url(manufacturer.slug), params: { manufacturer: { name: name_change } }

        manufacturer.reload

        expect(manufacturer.name).to eq(name_change)
        expect(response).to redirect_to(manufacturer_url(manufacturer))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit manufacturer page" do
        manufacturer = create(:manufacturer, company: @admin.active_company)
        patch manufacturer_url(manufacturer), params: invalid_attributes
        expect(response).to redirect_to edit_manufacturer_url(manufacturer)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested manufacturer" do
      manufacturer = create(:manufacturer, company: @admin.active_company)
      expect {
        delete manufacturer_url({slug: manufacturer.slug})
      }.to change(Manufacturer, :count).by(-1)
    end

    it "redirects to the manufacturers list" do
      manufacturer = create(:manufacturer, company: @admin.active_company)
      delete manufacturer_url({slug: manufacturer.slug})
      expect(response).to redirect_to(manufacturers_url)
    end
  end
end
