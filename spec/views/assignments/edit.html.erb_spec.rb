require 'rails_helper'

RSpec.describe "assignments/edit", type: :view do
  before(:each) do
    @assignment = assign(:assignment, Assignment.create!(
      assignable: nil,
      item: nil,
      active: false
    ))
  end

  it "renders the edit assignment form" do
    render

    assert_select "form[action=?][method=?]", assignment_path(@assignment), "post" do

      assert_select "input[name=?]", "assignment[assignable_id]"

      assert_select "input[name=?]", "assignment[item_id]"

      assert_select "input[name=?]", "assignment[active]"
    end
  end
end
