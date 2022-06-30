require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "Assignments", type: :request do
  let(:company) { create(:company) }

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "assigns an item to a person" do
        item = create(:item)
        license = create(:license)

        ap({ item: item.as_json, license: license.as_json })

        assignment_params = attributes_for(
          :assignment, 
          assignable: item, 
          assign_toable: license
        )
        ap({ assignment: assignment_params })
        expect {
          post assignments_url, params: { assignment: assignment_params }
        }.to change(Assignment, :count).by(1)
      end
    end
  end
end
