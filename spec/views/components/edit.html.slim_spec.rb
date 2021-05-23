require 'rails_helper'

RSpec.describe "components/edit", type: :view do
  before(:each) do
    @component = assign(:component, Component.create!(
      serial: "MyString",
      category: nil,
      qty: 1,
      min_qty: 1,
      cost: "",
      category: nil,
      manufacturer: nil,
      vendor: nil,
      default_location: nil
    ))
  end

  it "renders the edit component form" do
    render

    assert_select "form[action=?][method=?]", component_path(@component), "post" do

      assert_select "input[name=?]", "component[serial]"

      assert_select "input[name=?]", "component[category_id]"

      assert_select "input[name=?]", "component[qty]"

      assert_select "input[name=?]", "component[min_qty]"

      assert_select "input[name=?]", "component[cost]"

      assert_select "input[name=?]", "component[category_id]"

      assert_select "input[name=?]", "component[manufacturer_id]"

      assert_select "input[name=?]", "component[vendor_id]"

      assert_select "input[name=?]", "component[default_location_id]"
    end
  end
end
