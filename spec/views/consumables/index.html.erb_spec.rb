require 'rails_helper'

RSpec.describe "consumables/index", type: :view do
  before(:each) do
    assign(:consumables, [
      Consumable.create!(
        name: "Name",
        model_number: "Model Number",
        min_qty: 2,
        qty: 3,
        cost: "9.99",
        requestable: false,
        notes: "MyText",
        manufacturer: nil,
        consumable_category: nil,
        vendor: nil,
        default_location: nil
      ),
      Consumable.create!(
        name: "Name",
        model_number: "Model Number",
        min_qty: 2,
        qty: 3,
        cost: "9.99",
        requestable: false,
        notes: "MyText",
        manufacturer: nil,
        consumable_category: nil,
        vendor: nil,
        default_location: nil
      )
    ])
  end

  it "renders a list of consumables" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Model Number".to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: 3.to_s, count: 2
    assert_select "tr>td", text: "9.99".to_s, count: 2
    assert_select "tr>td", text: false.to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
