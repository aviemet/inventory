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
      item_params = FactoryBot.attributes_for(:item)
      ap item_params
      expect { post "/items", params: { item: item_params }  }.to change(Item, :count).by(1) 
    end
  end
end
