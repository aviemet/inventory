require 'rails_helper'

RSpec.describe "fieldsets/index", type: :view do
  before(:each) do
    assign(:fieldsets, [
      Fieldset.create!(
        name: "Name",
        description: "MyText"
      ),
      Fieldset.create!(
        name: "Name",
        description: "MyText"
      )
    ])
  end

  it "renders a list of fieldsets" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
