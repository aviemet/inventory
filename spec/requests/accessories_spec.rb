require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Accessories", type: :request do
  def valid_attributes
    {
      accessory: attributes_for(:accessory,
        model_id: create(:model).id,
        vendor_id: create(:vendor).id,
        default_location_id: create(:location).id
      )
    }
  end
  
  def invalid_attributes
   { 
     accessory: {
       name: "",
     }
   }
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Accessory" do
        expect {
          post accessories_url, params: valid_attributes
        }.to change(Accessory, :count).by(1)
      end

      it "redirects to the created accessory" do
        post accessories_url, params: valid_attributes
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
      it "updates the requested accessory" do
        accessory = create(:accessory)
        patch accessory_url(accessory), params: { accessory: { name: "Changed" } }
        accessory.reload
        expect(accessory.name).to eq("Changed")
      end

      it "redirects to the accessory" do
        accessory = create(:accessory)
        patch accessory_url(accessory), params: { accessory: { name: "Changed" } }
        accessory.reload
        expect(response).to redirect_to(accessory_url(accessory))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit accessory page" do
        accessory = create(:accessory)
        patch accessory_url(accessory), params: invalid_attributes
        expect(response).to redirect_to(edit_accessory_url(accessory))
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested accessory" do
      accessory = create(:accessory)
      expect {
        delete accessory_url(accessory)
      }.to change(Accessory, :count).by(-1)
    end

    it "redirects to the accessories list" do
      accessory = create(:accessory)
      delete accessory_url(accessory)
      expect(response).to redirect_to(accessories_url)
    end
  end
end