require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Assignments", type: :request do
  def assign_toables
    {
      item: create(:item),
      person: create(:person),
      location: create(:location),
    }
  end

  def assignment_params(assignable, assign_toable)
    attributes_for(
      :assignment, 
      assignable: create(assignable), 
      assign_toable: assign_toable,
      location_id: create(:location).id,
    )
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "assigns an item to assignables" do
        assign_toables.each do |key, model|
          expect {
            post assignments_url, params: { assignment: assignment_params(:item, model) }
          }.to change(Assignment, :count).by(1)
        end
      end

      it "assigns an accessory to a assignables" do
        assign_toables.each do |key, model|
          params = assignment_params(:accessory, model)

          expect{
            post assignments_url, params: { assignment: params }
          }.to change(Assignment, :count).by(1)
        end
      end

      it "assigns a consumable to a assignables" do
        assign_toables.each do |key, model|
          params = assignment_params(:consumable, model)
          params[:qty] = 2

          expect {
            post assignments_url, params: { assignment: params }
          }.to change(Assignment, :count).by(1)
        end
      end

      it "assigns a component to a assignables" do
        assign_toables.each do |key, model|
          params = assignment_params(:component, model)

          expect {
            post assignments_url, params: { assignment: params }
          }.to change(Assignment, :count).by(1)
        end
      end

    end
  end
end
