require 'rails_helper'

RSpec.describe "fields/show", type: :view do
  before(:each) do
    @field = assign(:field, Field.create!(
      name: "Name",
      format: "Format",
      element: "Element",
      description: "Description",
      notes: "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Format/)
    expect(rendered).to match(/Element/)
    expect(rendered).to match(/Description/)
    expect(rendered).to match(/MyText/)
  end
end
