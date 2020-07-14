require 'rails_helper'

RSpec.describe "consumable_categories/show", type: :view do
  before(:each) do
    @consumable_category = assign(:consumable_category, ConsumableCategory.create!(
      name: "Name",
      notes: "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/MyText/)
  end
end
