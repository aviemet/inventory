require 'rails_helper'

RSpec.describe "accessory_categories/index", type: :view do
  before(:each) do
    assign(:accessory_categories, [
      AccessoryCategory.create!(
        name: "Name",
        notes: "Notes"
      ),
      AccessoryCategory.create!(
        name: "Name",
        notes: "Notes"
      )
    ])
  end

  it "renders a list of accessory_categories" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Notes".to_s, count: 2
  end
end
