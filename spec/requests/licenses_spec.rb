require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/licenses" do
  def valid_attributes
    {
      license: attributes_for(:license, {
        vendor_id: create(:vendor).id,
        manufacturer_id: create(:manufacturer).id,
        category_id: create(:category).id,
      },),
    }
  end

  def invalid_attributes
    {
      license: {
        name: "",
        purchased_at: DateTime.now,
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all licenses" do
        license = create(:license, company: @admin.active_company)

        get licenses_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(license.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of licenses" do
        license1 = create(:license, { name: "Include", company: @admin.active_company })
        license2 = create(:license, { name: "Exclue", company: @admin.active_company })

        get licenses_url, params: { search: license1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(license1.name))
        expect(response.body).not_to include(CGI.escapeHTML(license2.name))
      end
    end

    context "new page" do
      it "displays form to create a new license" do
        get new_license_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a license" do
        license = create(:license, { company: @admin.active_company })

        get edit_license_url(license)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        license = create(:license, company: @admin.active_company)
        get license_url({ id: license.id })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new License and redirects to show page" do
        expect{
          post licenses_url, params: valid_attributes
        }.to change(License, :count).by(1)
        expect(response).to redirect_to(license_url(License.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new License" do
        expect {
          post licenses_url, params: invalid_attributes
        }.not_to change(License, :count)
      end

      it "redirects back to the new license page" do
        post licenses_url, params: invalid_attributes
        expect(response).to redirect_to new_license_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested license and redirects to the show page" do
        license = create(:license, { company: @admin.active_company })
        patch license_url(license), params: { license: { name: "Changed" } }

        license.reload

        expect(license.name).to eq("Changed")
        expect(response).to redirect_to(license_url(license))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit license page" do
        license = create(:license, company: @admin.active_company)
        patch license_url(license), params: invalid_attributes
        expect(response).to redirect_to edit_license_url(license)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested license" do
      license = create(:license, company: @admin.active_company)
      expect {
        delete license_url(license)
      }.to change(License, :count).by(-1)
    end

    it "redirects to the licenses list" do
      license = create(:license, company: @admin.active_company)
      delete license_url(license)
      expect(response).to redirect_to(licenses_url)
    end
  end
end
