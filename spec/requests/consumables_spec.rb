require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Consumables", :inertia do
  def valid_attributes
    {
      consumable: attributes_for(
        :consumable,
        {
          status_label_id: create(:status_label).id,
          model_id: create(:model).id,
          vendor_id: create(:vendor).id,
          default_location_id: create(:location).id,
        },
      )
    }
  end

  def invalid_attributes
    {
      consumable: {
        name: "",
      }
    }
  end

  describe "GET /index" do
    login_admin

    describe "index page" do
      it "lists all consumables" do
        consumable = create(:consumable, { company: @admin.active_company })

        get consumables_url

        expect(response).to have_http_status(:ok)
        expect_inertia.to render_component 'Consumables/Index'
        expect(response.body).to include(CGI.escapeHTML(consumable.name))
      end

      context "with search params" do
        it "returns a filtered list of consumables" do
          consumable1 = create(:consumable, { name: "Include", company: @admin.active_company })
          consumable2 = create(:consumable, { name: "Exclude", company: @admin.active_company })

          get consumables_url, params: { search: consumable1.name }

          expect(response).to have_http_status(:ok)
          expect_inertia.to render_component 'Consumables/Index'
          expect(response.body).to include(CGI.escapeHTML(consumable1.name))
          expect(response.body).not_to include(CGI.escapeHTML(consumable2.name))
        end
      end
    end
  end

  describe "GET /show" do
    login_admin

    it "renders" do
      consumable = create(:consumable, company: @admin.active_company)

      get consumable_url({ id: consumable.id })

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Consumables/Show'
    end
  end

  describe "GET /new" do
    login_admin

    it "renders" do
      get new_consumable_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Consumables/New'
    end
  end

  describe "GET /edit" do
    login_admin

    it "renders" do
      consumable = create(:consumable, company: @admin.active_company)

      get edit_consumable_url(consumable)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Consumables/Edit'
    end
  end

  describe "GET /checkout" do
    login_admin

    it "renders" do
      consumable = create(:consumable, company: @admin.active_company)

      get checkout_consumable_url({ id: consumable.id })

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component 'Consumables/Checkout'
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters and redirects to show page" do
      it "creates a new Consumable" do
        expect {
          post consumables_url, params: valid_attributes
        }.to change(Consumable, :count).by(1)
        expect(response).to redirect_to(consumable_url(Consumable.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new consumable" do
        expect {
          post consumables_url, params: invalid_attributes
        }.not_to change(Consumable, :count)
      end

      it "redirects back to the new consumable page" do
        post consumables_url, params: invalid_attributes
        expect(response).to redirect_to(new_consumable_url)
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested consumable and redirects to the show page" do
        consumable = create(:consumable, { company: @admin.active_company })
        patch consumable_url(consumable), params: { consumable: { name: "Changed" } }

        consumable.reload

        expect(consumable.name).to eq("Changed")
        expect(response).to redirect_to(consumable_url(consumable))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit consumable page" do
        consumable = create(:consumable, { company: @admin.active_company })
        patch consumable_url(consumable), params: invalid_attributes
        expect(response).to redirect_to(edit_consumable_url(consumable))
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested consumable" do
      consumable = create(:consumable, { company: @admin.active_company })
      expect {
        delete consumable_url(consumable)
      }.to change(Consumable, :count).by(-1)
    end

    it "redirects to the consumables list" do
      consumable = create(:consumable, { company: @admin.active_company })
      delete consumable_url(consumable)
      expect(response).to redirect_to(consumables_url)
    end
  end
end
