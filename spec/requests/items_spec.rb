require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/items", type: :request do
  def valid_attributes
    {
      item: attributes_for(:item,
                           model_id: create(:model).id,
                           vendor_id: create(:vendor).id,
                           default_location_id: create(:location).id)
    }
  end

  def invalid_attributes
    {
      item: {
        name: "",
      }
    }
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Item" do
        expect {
          post items_url, params: valid_attributes
        }.to change(Item, :count).by(1)
      end

      it "redirects to the created item" do
        post items_url, params: valid_attributes
        expect(response).to redirect_to(item_url(Item.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Item" do
        expect {
          post items_url, params: invalid_attributes
        }.to change(Item, :count).by(0)
      end

      it "redirects back to the new item page" do
        post items_url, params: invalid_attributes
        expect(response).to redirect_to(new_item_url)
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested item" do
        item = create(:item)
        patch item_url(item), params: { item: { name: "Changed" } }
        item.reload
        expect(item.name).to eq("Changed")
      end

      it "redirects to the item" do
        item = create(:item)
        patch item_url(item), params: { item: { name: "Changed" } }
        item.reload
        expect(response).to redirect_to(item_url(item))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit item page" do
        item = create(:item)
        patch item_url(item), params: invalid_attributes
        expect(response).to redirect_to(edit_item_url(item))
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested item" do
      item = create(:item)
      expect {
        delete item_url(item)
      }.to change(Item, :count).by(-1)
    end

    it "redirects to the items list" do
      item = create(:item)
      delete item_url(item)
      expect(response).to redirect_to(items_url)
    end
  end
end
