require 'rails_helper'

RSpec.describe "accessories/show", type: :view do
  before(:each) do
    @accessory = assign(:accessory, Accessory.create!(
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
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Serial/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(/Model Number/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/3/)
  end
end
