require 'rails_helper'

RSpec.describe "consumables/new", type: :view do
  before(:each) do
    assign(:consumable, Consumable.new(
      name: "MyString",
      model_number: "MyString",
      min_qty: 1,
      qty: 1,
      cost: "9.99",
      requestable: false,
      notes: "MyText",
      manufacturer: nil,
      consumable_category: nil,
      vendor: nil,
      default_location: nil
    ))
  end

  it "renders new consumable form" do
    render

    assert_select "form[action=?][method=?]", consumables_path, "post" do

      assert_select "input[name=?]", "consumable[name]"

      assert_select "input[name=?]", "consumable[model_number]"

      assert_select "input[name=?]", "consumable[min_qty]"

      assert_select "input[name=?]", "consumable[qty]"

      assert_select "input[name=?]", "consumable[cost]"

      assert_select "input[name=?]", "consumable[requestable]"

      assert_select "textarea[name=?]", "consumable[notes]"

      assert_select "input[name=?]", "consumable[manufacturer_id]"

      assert_select "input[name=?]", "consumable[consumable_category_id]"

      assert_select "input[name=?]", "consumable[vendor_id]"

      assert_select "input[name=?]", "consumable[default_location_id]"
    end
  end
end
