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

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "assigns an item to a assignables" do
        assign_toables.each do |key, model|
          assignment_params = attributes_for(
            :assignment, 
            assignable: create(:item), 
            assign_toable: model,
          )

          expect {
            post assignments_url, params: { assignment: assignment_params }
          }.to change(Assignment, :count).by(1)
        end
      end

      it "assigns an accessory to a assignables" do
        assign_toables.each do |key, model|
          assignment_params = attributes_for(
            :assignment, 
            assignable: create(:accessory), 
            assign_toable: model,
          )

          expect {
            post assignments_url, params: { assignment: assignment_params }
          }.to change(Assignment, :count).by(1)
        end
      end

      it "assigns a consumable to a assignables" do
        assign_toables.each do |key, model|
          assignment_params = attributes_for(
            :assignment, 
            assignable: create(:consumable), 
            assign_toable: model,
          )

          expect {
            post assignments_url, params: { assignment: assignment_params }
          }.to change(Assignment, :count).by(1)
        end
      end

      it "assigns a component to a assignables" do
        assign_toables.each do |key, model|
          assignment_params = attributes_for(
            :assignment, 
            assignable: create(:component), 
            assign_toable: model,
          )

          expect {
            post assignments_url, params: { assignment: assignment_params }
          }.to change(Assignment, :count).by(1)
        end
      end

    end
  end
end
