require 'rails_helper'

RSpec.describe "fieldset_associations/index", type: :view do
  before(:each) do
    assign(:fieldset_associations, [
      FieldsetAssociation.create!(
        fieldset: nil,
        fieldable: nil
      ),
      FieldsetAssociation.create!(
        fieldset: nil,
        fieldable: nil
      )
    ])
  end

  it "renders a list of fieldset_associations" do
    render
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
