require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Assignments" do
  def assign_toables
    {
      item: create(:item, {
        company: @admin.active_company
      },),
      person: create(:person, {
        company: @admin.active_company
      },),
      location: create(:location, {
        company: @admin.active_company
      },),
    }
  end

  def assignment_params(assignable, assign_toable = nil)
    attributes_for(
      :assignment,
      assignable: assignable,
      assign_toable: assign_toable,
    )
  end

  describe "POST /create" do
    login_admin

    # CREATE - Valid
    context "with valid parameters" do
      it "assigns an item to an assignable and redirects to the assignable" do
        assign_toables.each do |_key, model|
          item = create(:item, company: @admin.active_company)
          expect {
            post assignments_url, params: { assignment: assignment_params(item, model) }
          }.to change(Assignment, :count).by(1)
          expect(response).to redirect_to(item)
        end
      end

      it "assigns an accessory to an assignable and redirects to the assignable" do
        assign_toables.each do |_key, model|
          accessory = create(:accessory, company: @admin.active_company)
          expect{
            post assignments_url, params: { assignment: assignment_params(accessory, model) }
          }.to change(Assignment, :count).by(1)
          expect(response).to redirect_to(accessory)
        end
      end

      it "assigns a consumable to an assignable and redirects to the assignable" do
        assign_toables.each do |_key, model|
          consumable = create(:consumable, company: @admin.active_company, qty: 2)
          expect {
            post assignments_url, params: { assignment: assignment_params(consumable, model) }
          }.to change(Assignment, :count).by(1)
          expect(response).to redirect_to(consumable)
        end
      end

      it "assigns a component to an assignable and redirects to the assignable" do
        assign_toables.each do |_key, model|
          component = create(:component, company: @admin.active_company)
          expect {
            post assignments_url, params: { assignment: assignment_params(component, model) }
          }.to change(Assignment, :count).by(1)
          expect(response).to redirect_to(component)
        end
      end

      it "assigns a license to an assignable and redirects to the assignable" do
        assign_toables.each do |_key, model|
          license = create(:license, company: @admin.active_company)
          expect {
            post assignments_url, params: { assignment: assignment_params(license, model) }
          }.to change(Assignment, :count).by(1)
          expect(response).to redirect_to(license)
        end
      end
    end

    # CREATE - Invalid
    context "with invalid parameters" do

      it "doesn't assign an item and redirects to the checkout page" do
        item = create(:item, company: @admin.active_company)
        expect {
          post assignments_url, params: { assignment: assignment_params(item) }
        }.not_to change(Assignment, :count)
        expect(response).to redirect_to(checkout_item_url(item))
      end

      it "doesn't assign an accessory and redirects to the checkout page" do
        accessory = create(:accessory, company: @admin.active_company)
        expect{
          post assignments_url, params: { assignment: assignment_params(accessory) }
        }.not_to change(Assignment, :count)
        expect(response).to redirect_to(checkout_accessory_url(accessory))
      end

      it "doesn't assign a consumable and redirects to the checkout page" do
        consumable = create(:consumable, company: @admin.active_company, qty: 2)
        expect {
          post assignments_url, params: { assignment: assignment_params(consumable) }
        }.not_to change(Assignment, :count)
        expect(response).to redirect_to(checkout_consumable_url(consumable))
      end

      it "doesn't assign a component and redirects to the checkout page" do
        component = create(:component, company: @admin.active_company)
        expect {
          post assignments_url, params: { assignment: assignment_params(component) }
        }.not_to change(Assignment, :count)
        expect(response).to redirect_to(checkout_component_url(component))
      end

      it "doesn't assign a license and redirects to the checkout page" do
        license = create(:license, company: @admin.active_company)
        expect {
          post assignments_url, params: { assignment: assignment_params(license) }
        }.not_to change(Assignment, :count)
        expect(response).to redirect_to(checkout_license_url(license))
      end

    end

  end

  describe "PUT /unassign" do
    login_admin

    # UNASSIGN - valid
    context "with valid parameters" do
      it "unassigns an item and redirects to the assignable" do
        assign_toables.each do |_key, model|
          item = create(:item, company: @admin.active_company)
          assignment = item.assign_to model

          patch unassign_assignment_url(assignment.id), params: {
            assignment: assignment_params(item, model)
          }
          expect(assignment.reload.active).to be(false)
        end
      end

      it "unassigns an accessory and redirects to the assignable" do
        assign_toables.each do |_key, model|
          accessory = create(:accessory, company: @admin.active_company)
          assignment = accessory.assign_to model

          patch unassign_assignment_url(assignment.id), params: {
            assignment: assignment_params(accessory, model)
          }
          expect(assignment.reload.active).to be(false)
        end
      end

      it "unassigns a component and redirects to the assignable" do
        assign_toables.each do |_key, model|
          component = create(:component, company: @admin.active_company)
          assignment = component.assign_to model

          patch unassign_assignment_url(assignment.id), params: {
            assignment: assignment_params(component, model)
          }
          expect(assignment.reload.active).to be(false)
        end
      end

      it "unassigns a license and redirects to the assignable" do
        assign_toables.each do |_key, model|
          license = create(:license, company: @admin.active_company)
          assignment = license.assign_to model

          patch unassign_assignment_url(assignment.id), params: {
            assignment: assignment_params(license, model)
          }
          expect(assignment.reload.active).to be(false)
        end
      end
    end

  end
end
