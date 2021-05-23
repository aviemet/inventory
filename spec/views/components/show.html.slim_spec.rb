require 'rails_helper'

RSpec.describe "components/show", type: :view do
  before(:each) do
    @component = assign(:component, Component.create!(
      serial: "Serial",
      category: nil,
      qty: 2,
      min_qty: 3,
      cost: "",
      category: nil,
      manufacturer: nil,
      vendor: nil,
      default_location: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Serial/)
    expect(rendered).to match(//)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
