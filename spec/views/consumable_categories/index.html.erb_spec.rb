require 'rails_helper'

RSpec.describe "consumable_categories/index", type: :view do
  before(:each) do
    assign(:consumable_categories, [
      ConsumableCategory.create!(
        name: "Name",
        notes: "MyText"
      ),
      ConsumableCategory.create!(
        name: "Name",
        notes: "MyText"
      )
    ])
  end

  it "renders a list of consumable_categories" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
