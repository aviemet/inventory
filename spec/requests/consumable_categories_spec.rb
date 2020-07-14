 require 'rails_helper'

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

RSpec.describe "/consumable_categories", type: :request do
  # ConsumableCategory. As you add validations to ConsumableCategory, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      ConsumableCategory.create! valid_attributes
      get consumable_categories_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      consumable_category = ConsumableCategory.create! valid_attributes
      get consumable_category_url(consumable_category)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_consumable_category_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "render a successful response" do
      consumable_category = ConsumableCategory.create! valid_attributes
      get edit_consumable_category_url(consumable_category)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new ConsumableCategory" do
        expect {
          post consumable_categories_url, params: { consumable_category: valid_attributes }
        }.to change(ConsumableCategory, :count).by(1)
      end

      it "redirects to the created consumable_category" do
        post consumable_categories_url, params: { consumable_category: valid_attributes }
        expect(response).to redirect_to(consumable_category_url(ConsumableCategory.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new ConsumableCategory" do
        expect {
          post consumable_categories_url, params: { consumable_category: invalid_attributes }
        }.to change(ConsumableCategory, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post consumable_categories_url, params: { consumable_category: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested consumable_category" do
        consumable_category = ConsumableCategory.create! valid_attributes
        patch consumable_category_url(consumable_category), params: { consumable_category: new_attributes }
        consumable_category.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the consumable_category" do
        consumable_category = ConsumableCategory.create! valid_attributes
        patch consumable_category_url(consumable_category), params: { consumable_category: new_attributes }
        consumable_category.reload
        expect(response).to redirect_to(consumable_category_url(consumable_category))
      end
    end

    context "with invalid parameters" do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        consumable_category = ConsumableCategory.create! valid_attributes
        patch consumable_category_url(consumable_category), params: { consumable_category: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested consumable_category" do
      consumable_category = ConsumableCategory.create! valid_attributes
      expect {
        delete consumable_category_url(consumable_category)
      }.to change(ConsumableCategory, :count).by(-1)
    end

    it "redirects to the consumable_categories list" do
      consumable_category = ConsumableCategory.create! valid_attributes
      delete consumable_category_url(consumable_category)
      expect(response).to redirect_to(consumable_categories_url)
    end
  end
end
