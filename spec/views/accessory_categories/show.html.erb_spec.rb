require 'rails_helper'

RSpec.describe "accessory_categories/show", type: :view do
  before(:each) do
    @accessory_category = assign(:accessory_category, AccessoryCategory.create!(
      name: "Name",
      notes: "Notes"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Notes/)
  end
end
