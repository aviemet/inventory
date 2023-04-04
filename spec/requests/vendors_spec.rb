require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/vendors", type: :request do
  def valid_attributes
    {
      vendor: attributes_for(:vendor)
    }
  end

  def invalid_attributes
    {
      vendor: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all vendors" do
        vendor = create(:vendor, { company: @admin.active_company })

        get vendors_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(vendor.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of vendors" do
        vendor1 = create(:vendor, { name: "Include", company: @admin.active_company })
        vendor2 = create(:vendor, { name: "Exclue", company: @admin.active_company })

        get vendors_url, params: { search: vendor1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(vendor1.name))
        expect(response.body).not_to include(CGI.escapeHTML(vendor2.name))
      end
    end

    context "new page" do
      it "displays form to create a new vendor" do
        get new_vendor_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a vendor" do
        vendor = create(:vendor, company: @admin.active_company)

        get edit_vendor_url(vendor)

        expect(response).to have_http_status(:ok)
      end
    end

  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Vendor and redirects to show page" do
        expect{
          post vendors_url, params: valid_attributes
        }.to change(Vendor, :count).by(1)
        expect(response).to redirect_to(vendor_url(Vendor.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Vendor" do
        expect {
          post vendors_url, params: invalid_attributes
        }.to change(Vendor, :count).by(0)
      end

      it "redirects back to the new vendor page" do
        post vendors_url, params: invalid_attributes
        expect(response).to redirect_to new_vendor_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested vendor and redirects to the show page" do
        name_change = "Changed"
        vendor = create(:vendor, company: @admin.active_company )
        patch vendor_url(vendor.slug), params: { vendor: { name: name_change } }

        vendor.reload

        expect(vendor.name).to eq(name_change)
        expect(response).to redirect_to(vendor_url(vendor))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit vendor page" do
        vendor = create(:vendor, company: @admin.active_company)
        patch vendor_url(vendor), params: invalid_attributes
        expect(response).to redirect_to edit_vendor_url(vendor)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested vendor" do
      vendor = create(:vendor, company: @admin.active_company)
      expect {
        delete vendor_url({slug: vendor.slug})
      }.to change(Vendor, :count).by(-1)
    end

    it "redirects to the vendors list" do
      vendor = create(:vendor, company: @admin.active_company)
      delete vendor_url({slug: vendor.slug})
      expect(response).to redirect_to(vendors_url)
    end
  end
end
