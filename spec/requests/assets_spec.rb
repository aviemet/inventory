require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/assets" do
  def valid_attributes
    {
      asset: attributes_for(:asset,
                            status_label_id: create(:status_label).id,
                            model_id: create(:model).id,
                            vendor_id: create(:vendor).id,
                            default_location_id: create(:location).id,)
    }
  end

  def invalid_attributes
    {
      asset: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all assets" do
        item = create(:item, { company: User.first.active_company })
        accessory = create(:accessory, { company: User.first.active_company })
        component = create(:component, { company: User.first.active_company })
        consumable = create(:consumable, { company: User.first.active_company })

        get assets_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(item.name))
        expect(response.body).to include(CGI.escapeHTML(accessory.name))
        expect(response.body).to include(CGI.escapeHTML(component.name))
        expect(response.body).to include(CGI.escapeHTML(consumable.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of assets" do
        asset1 = create(:accessory, { name: "Include", company: User.first.active_company })
        asset2 = create(:item, { name: "Exclue", company: User.first.active_company })

        get assets_url, params: { search: asset1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(asset1.name))
        expect(response.body).not_to include(CGI.escapeHTML(asset2.name))
      end
    end

  end
end
