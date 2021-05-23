require 'rails_helper'

RSpec.describe "components/index", type: :view do
  before(:each) do
    assign(:components, [
      Component.create!(
        serial: "Serial",
        category: nil,
        qty: 2,
        min_qty: 3,
        cost: "",
        category: nil,
        manufacturer: nil,
        vendor: nil,
        default_location: nil
      ),
      Component.create!(
        serial: "Serial",
        category: nil,
        qty: 2,
        min_qty: 3,
        cost: "",
        category: nil,
        manufacturer: nil,
        vendor: nil,
        default_location: nil
      )
    ])
  end

  it "renders a list of components" do
    render
    assert_select "tr>td", text: "Serial".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: 3.to_s, count: 2
    assert_select "tr>td", text: "".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
