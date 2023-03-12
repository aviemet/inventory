require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Categories", type: :request do
  def valid_attributes
    {
      category: attributes_for(:category)
    }
  end

  def invalid_attributes
    {
      category: {
        name: "",
      }
    }
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Category" do
        expect {
          post categories_url, params: valid_attributes
        }.to change(Category, :count).by(1)
      end

      it "redirects to the created category" do
        post categories_url, params: valid_attributes
        expect(response).to redirect_to(category_url(Category.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new category" do
        expect {
          post categories_url, params: invalid_attributes
        }.to change(Category, :count).by(0)
      end

      it "redirects back to the new category page" do
        post categories_url, params: invalid_attributes
        expect(response).to redirect_to(new_category_url)
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested category" do
        category = create(:category, {
          company: @admin.active_company
        })
        patch category_url(category), params: { category: { name: "Changed" } }
        category.reload
        expect(category.name).to eq("Changed")
      end

      it "redirects to the category" do
        category = create(:category, {
          company: @admin.active_company
        })
        patch category_url(category), params: { category: { name: "Changed" } }
        category.reload
        expect(response).to redirect_to(category_url(category))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit category page" do
        category = create(:category, {
          company: @admin.active_company
        })
        patch category_url(category), params: invalid_attributes
        expect(response).to redirect_to(edit_category_url(category))
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested category" do
      category = create(:category, {
        company: @admin.active_company
      })
      expect {
        delete category_url(category)
      }.to change(Category, :count).by(-1)
    end

    it "redirects to the categories list" do
      category = create(:category, {
        company: @admin.active_company
      })
      delete category_url(category)
      expect(response).to redirect_to(categories_url)
    end
  end
end
