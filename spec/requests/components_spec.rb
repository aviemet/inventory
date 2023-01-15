require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/components", type: :request do

  def valid_attributes_hash(company)
    {
      component: attributes_for(:component,
                                status_label_id: create(:status_label).id,
                                vendor_id: create(:vendor).id,
                                model_id: create(:model).id,
                                company:),
    }
  end

  def invalid_attributes_hash(company)
    {
      component: {
        name: "",
        purchased_at: DateTime.now,
        company:,
      }
    }
  end

  let(:company) { build_stubbed(:company) }

  let(:valid_attributes) { valid_attributes_hash(company) }

  let(:invalid_attributes) { invalid_attributes_hash(company) }

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Component" do
        expect {
          post components_url, params: valid_attributes
        }.to change(Component, :count).by(1)
      end

      it "redirects to the created component" do
        post components_url, params: valid_attributes
        expect(response).to redirect_to(component_url(Component.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Component" do
        expect {
          post components_url, params: invalid_attributes
        }.to change(Component, :count).by(0)
      end

      it "redirects back to the new component page" do
        post components_url, params: invalid_attributes
        expect(response).to redirect_to new_component_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      let(:new_attributes) { valid_attributes_hash(company) }
      it "updates the requested component" do
        component = create(:component)
        patch component_url(component), params: { component: new_attributes }
        component.reload
      end

      it "redirects to the component" do
        component = create(:component)
        patch component_url(component), params: { component: new_attributes }
        component.reload
        expect(response).to redirect_to(component_url(component))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit component page" do
        component = create(:component)
        patch component_url(component), params: invalid_attributes
        expect(response).to redirect_to edit_component_url(component)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested component" do
      component = create(:component)
      expect {
        delete component_url(component)
      }.to change(Component, :count).by(-1)
    end

    it "redirects to the components list" do
      component = create(:component)
      delete component_url(component)
      expect(response).to redirect_to(components_url)
    end
  end
end
