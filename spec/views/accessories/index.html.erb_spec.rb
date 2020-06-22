require 'rails_helper'

RSpec.describe "accessories/index", type: :view do
  before(:each) do
    assign(:accessories, [
      Accessory.create!(
        name: "Name",
        serial: "Serial",
        notes: "MyText",
        qty: 2,
        vendor: nil,
        default_location: nil,
        accessory_category: nil,
        model_number: "Model Number",
        cost: "9.99",
        min_qty: 3
      ),
      Accessory.create!(
        name: "Name",
        serial: "Serial",
        notes: "MyText",
        qty: 2,
        vendor: nil,
        default_location: nil,
        accessory_category: nil,
        model_number: "Model Number",
        cost: "9.99",
        min_qty: 3
      )
    ])
  end

  it "renders a list of accessories" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Serial".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: "Model Number".to_s, count: 2
    assert_select "tr>td", text: "9.99".to_s, count: 2
    assert_select "tr>td", text: 3.to_s, count: 2
  end
end
