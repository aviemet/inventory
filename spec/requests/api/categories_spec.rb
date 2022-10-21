require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Api::Categories", type: :request do
  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Category" do
        expect {
          post api_categories_url, params: { category: attributes_for(:category) }
        }.to change(Category, :count).by(1)
      end

      it "responds with success" do
        post api_categories_url, params: { category: attributes_for(:category) }
        expect(response).to have_http_status(:created)
      end
    end

    context "with invalid parameters" do
      it "does not create a new Category" do
        expect {
          post api_categories_url, params: { category: { name: "" } }
        }.to change(Category, :count).by(0)
      end

      # it "responds with errors" do
      #   post api_categories_url, params: { category: { name: "" } }
      #   expect(JSON.parse(response.body)).to have_key("errors")
      # end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the Category" do
        category = create(:category)
        ap({ url: api_category_url(category.slug) })
        patch api_category_url(category.slug), params: { category: { name: "Changed" } }
        expect(Category.last.name).to eq("Changed")
      end

      it "responds with success" do
        post api_categories_url, params: { category: attributes_for(:category) }
        expect(response).to have_http_status(:created)
      end
    end

    context "with invalid parameters" do
      it "does not create a new Category" do
        expect {
          post api_categories_url, params: { category: { name: "" } }
        }.to change(Category, :count).by(0)
      end

      it "responds with errors" do
        post api_categories_url, params: { category: { name: "" } }
        expect(JSON.parse(response.body)).to have_key("errors")
      end
    end
  end
end
