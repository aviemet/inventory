require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/items", type: :request do
  def valid_attributes
    {
      item: attributes_for(:item,
                           status_label_id: create(:status_label).id,
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

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all items" do
        item = create(:item, { company: User.first.active_company })

        get items_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(item.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of items" do
        item1 = create(:item, { name: "Include", company: User.first.active_company })
        item2 = create(:item, { name: "Exclue", company: User.first.active_company })

        get items_url, params: { search: item1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(item1.name))
        expect(response.body).not_to include(CGI.escapeHTML(item2.name))
      end
    end

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
