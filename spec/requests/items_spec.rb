require 'rails_helper'
require 'amazing_print'
require_relative '../support/devise'

RSpec.describe "Items", type: :request do
  describe "GET /items" do
    login_admin

    it "renders" do
      get items_path
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /items" do
    login_admin

    it "creates item" do 
      company = create(:company)
      item_params = FactoryBot.build_stubbed(:item){ |item| 
        item.model_id = create(:model).id
        item.default_location_id = create(:location).id
        item.vendor_id = create(:vendor).id
      }.attributes
      expect { post "/items", params: { item: item_params, company: { id: company.id } }  }.to change(Item, :count).by(1) 
    end
  end
end
