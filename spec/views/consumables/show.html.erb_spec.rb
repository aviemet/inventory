require 'rails_helper'

RSpec.describe "consumables/show", type: :view do
  before(:each) do
    @consumable = assign(:consumable, Consumable.create!(
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
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Model Number/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
