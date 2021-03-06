require 'rails_helper'
require_relative '../support/devise'






# RSpec.describe "Items", type: :request do
#   describe "POST /items" do
#     login_admin

#     it "creates item" do
#       company = create(:company)
#       item_params = FactoryBot.build_stubbed(:item){ |item|
#         item.model_id = create(:model).id
#         item.default_location_id = create(:location).id
#         item.vendor_id = create(:vendor).id
#       }.attributes
#       expect { post "/items", params: { item: item_params, company: { id: company.id } } }.to change(Item, :count).by(1)
#     end
#   end
# end



# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

def valid_attributes_hash(company)
  {
    item: attributes_for(:item,
      model_id: create(:model).id,
      vendor_id: create(:vendor).id,
    ),
    company: { id: company.id },
  }
end

def invalid_attributes_hash(company)
 { 
   item: {
     name: "",
   },
   company: { id: company.id },
 }
end

RSpec.describe "/items", type: :request do

  let(:company) { create(:company) }
  
  # Item. As you add validations to Item, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) { valid_attributes_hash(company) }

  let(:invalid_attributes) { invalid_attributes_hash(company) }

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

      it "renders a successful response (i.e. to display the 'new' template)" do
        post items_url, params: invalid_attributes
        expect(response).to have_http_status(422)
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      let(:new_attributes) { valid_attributes_hash(company) }
      it "updates the requested item" do
        item = create(:item)
        patch item_url(item), params: { item: new_attributes }
        item.reload
        # skip("Add assertions for updated state")
      end

      it "redirects to the item" do
        item = create(:item)
        patch item_url(item), params: { item: new_attributes }
        item.reload
        expect(response).to redirect_to(item_url(item))
      end
    end

    context "with invalid parameters" do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        item = create(:item)
        patch item_url(item), params: invalid_attributes
        expect(response).to have_http_status(422)
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
