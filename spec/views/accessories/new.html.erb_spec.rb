require 'rails_helper'

RSpec.describe "accessories/new", type: :view do
  before(:each) do
    assign(:accessory, Accessory.new(
      name: "MyString",
      serial: "MyString",
      notes: "MyText",
      qty: 1,
      vendor: nil,
      default_location: nil,
      accessory_category: nil,
      model_number: "MyString",
      cost: "9.99",
      min_qty: 1
    ))
  end

  it "renders new accessory form" do
    render

    assert_select "form[action=?][method=?]", accessories_path, "post" do

      assert_select "input[name=?]", "accessory[name]"

      assert_select "input[name=?]", "accessory[serial]"

      assert_select "textarea[name=?]", "accessory[notes]"

      assert_select "input[name=?]", "accessory[qty]"

      assert_select "input[name=?]", "accessory[vendor_id]"

      assert_select "input[name=?]", "accessory[default_location_id]"

      assert_select "input[name=?]", "accessory[accessory_category_id]"

      assert_select "input[name=?]", "accessory[model_number]"

      assert_select "input[name=?]", "accessory[cost]"

      assert_select "input[name=?]", "accessory[min_qty]"
    end
  end
end
