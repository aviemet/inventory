require 'rails_helper'

RSpec.describe "fieldset_associations/show", type: :view do
  before(:each) do
    @fieldset_association = assign(:fieldset_association, FieldsetAssociation.create!(
      fieldset: nil,
      fieldable: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
