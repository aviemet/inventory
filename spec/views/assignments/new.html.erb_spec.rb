require 'rails_helper'

RSpec.describe "assignments/new", type: :view do
  before(:each) do
    assign(:assignment, Assignment.new(
      assignable: nil,
      item: nil,
      active: false
    ))
  end

  it "renders new assignment form" do
    render

    assert_select "form[action=?][method=?]", assignments_path, "post" do

      assert_select "input[name=?]", "assignment[assignable_id]"

      assert_select "input[name=?]", "assignment[item_id]"

      assert_select "input[name=?]", "assignment[active]"
    end
  end
end
