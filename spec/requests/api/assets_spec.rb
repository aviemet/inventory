require 'rails_helper'
require_relative '../../support/devise'

RSpec.describe "Api::Assets" do
  describe "GET /api/assets" do
    login_admin

    it "returns a list of assets" do
      asset = create(:accessory, company: @admin.active_company)

      get api_assets_url, headers: json_headers

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body).to include(
        hash_including(
          "id" => asset.id,
          "name" => asset.name,
        ),
      )
    end

    it "includes associated records" do
      asset = create(:accessory, company: @admin.active_company)

      get api_assets_url, headers: json_headers

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body).to include(
        hash_including(
          "id" => asset.id,
          "model" => hash_including("id" => asset.model.id),
          "vendor" => hash_including("id" => asset.vendor.id),
        ),
      )
    end
  end

  describe "GET /api/assets/:id" do
    login_admin

    it "returns the requested asset" do
      asset = create(:accessory, company: @admin.active_company)

      get api_asset_url(asset), headers: json_headers

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body).to include(
        "id" => asset.id,
        "name" => asset.name,
      )
    end
  end

  describe "GET /api/options/assets" do
    login_admin

    it "returns assets in options format" do
      asset = create(:accessory, company: @admin.active_company)

      get api_assets_options_url, headers: json_headers

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body).to include(
        hash_including(
          "value" => asset.id,
          "label" => asset.name,
        ),
      )
    end
  end

  describe "POST /api/assets" do
    login_admin

    let(:valid_params) do
      {
        asset: {
          name: "Test Asset",
          location_id: create(:location, company: @admin.active_company).id,
          manager_id: create(:user, company: @admin.active_company).id,
          notes: "Test notes"
        }
      }
    end

    it "creates a new asset" do
      expect {
        post api_assets_url, params: valid_params, headers: json_headers
      }.to change(Asset, :count).by(1)

      expect(response).to have_http_status(:created)
      expect(response.parsed_body).to include("name" => "Test Asset")
    end

    it "returns errors for invalid params" do
      post api_assets_url,
        params: { asset: { name: "" } },
        headers: json_headers

      expect(response).to have_http_status(:see_other)
      expect(response.parsed_body).to have_key("errors")
    end
  end

  describe "PATCH /api/assets/:id" do
    login_admin

    it "updates the requested asset" do
      asset = create(:accessory, company: @admin.active_company)

      patch api_asset_url(asset),
        params: { asset: { name: "Updated Name" } },
        headers: json_headers

      expect(response).to have_http_status(:created)
      expect(response.parsed_body).to include("name" => "Updated Name")
    end

    it "returns errors for invalid params" do
      asset = create(:accessory, company: @admin.active_company)

      patch api_asset_url(asset),
        params: { asset: { name: "" } },
        headers: json_headers

      expect(response).to have_http_status(:see_other)
      expect(response.parsed_body).to have_key("errors")
    end
  end
end
