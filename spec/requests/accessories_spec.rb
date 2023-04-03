require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Accessories", type: :request do
  def valid_attributes
    {
      accessory: attributes_for(:accessory,
                                status_label_id: create(:status_label).id,
                                model_id: create(:model).id,
                                vendor_id: create(:vendor).id,
                                default_location_id: create(:location).id)
    }
  end

  def invalid_attributes
    {
      accessory: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all accessories" do
        accessory = create(:accessory, { company: User.first.active_company })

        get accessories_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(accessory.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of accessories" do
        accessory1 = create(:accessory, { name: "Include", company: User.first.active_company })
        accessory2 = create(:accessory, { name: "Exclue", company: User.first.active_company })

        get accessories_url, params: { search: accessory1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(accessory1.name))
        expect(response.body).not_to include(CGI.escapeHTML(accessory2.name))
      end
    end

  end

  describe "GET /show" do
    login_admin

    it "renders" do
      accessory = create(:accessory, company: Company.first)
      get accessory_url({ id: accessory.id })
      expect(response).to have_http_status(:ok)
    end
  end

  describe "GET /checkout" do
    login_admin

    it "renders" do
      accessory = create(:accessory, company: Company.first)
      get checkout_accessory_url({id: accessory.id })
      expect(response).to have_http_status(:ok)
    end
  end

  describe "GET /checkin" do
    login_admin

    it "renders" do
      company = Company.first
      accessory = create(:accessory, company:)
      item = create(:item, company:)
      assignment = accessory.assign_to item

      get checkin_accessory_url({id: accessory.id, assignment_id: assignment.id })
      expect(response).to have_http_status(:ok)
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters and redirects to show page" do
      it "creates a new Accessory" do
        expect {
          post accessories_url, params: valid_attributes
        }.to change(Accessory, :count).by(1)
        expect(response).to redirect_to(accessory_url(Accessory.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new accessory" do
        expect {
          post accessories_url, params: invalid_attributes
        }.to change(Accessory, :count).by(0)
      end

      it "redirects back to the new accessory page" do
        post accessories_url, params: invalid_attributes
        expect(response).to redirect_to(new_accessory_url)
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested accessory and redirects to the show page" do
        accessory = create(:accessory, { company: User.first.active_company })
        patch accessory_url(accessory), params: { accessory: { name: "Changed" } }

        accessory.reload

        expect(accessory.name).to eq("Changed")
        expect(response).to redirect_to(accessory_url(accessory))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit accessory page" do
        accessory = create(:accessory, { company: User.first.active_company })
        patch accessory_url(accessory), params: invalid_attributes
        expect(response).to redirect_to(edit_accessory_url(accessory))
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested accessory" do
      accessory = create(:accessory, { company: User.first.active_company })
      expect {
        delete accessory_url(accessory)
      }.to change(Accessory, :count).by(-1)
    end

    it "redirects to the accessories list" do
      accessory = create(:accessory, { company: User.first.active_company })
      delete accessory_url(accessory)
      expect(response).to redirect_to(accessories_url)
    end
  end
end
