require 'rails_helper'

RSpec.describe "fields/index", type: :view do
  before(:each) do
    assign(:fields, [
      Field.create!(
        name: "Name",
        format: "Format",
        element: "Element",
        description: "Description",
        notes: "MyText"
      ),
      Field.create!(
        name: "Name",
        format: "Format",
        element: "Element",
        description: "Description",
        notes: "MyText"
      )
    ])
  end

  it "renders a list of fields" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Format".to_s, count: 2
    assert_select "tr>td", text: "Element".to_s, count: 2
    assert_select "tr>td", text: "Description".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
