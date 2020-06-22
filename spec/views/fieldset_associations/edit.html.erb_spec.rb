require 'rails_helper'

RSpec.describe "fieldset_associations/edit", type: :view do
  before(:each) do
    @fieldset_association = assign(:fieldset_association, FieldsetAssociation.create!(
      fieldset: nil,
      fieldable: nil
    ))
  end

  it "renders the edit fieldset_association form" do
    render

    assert_select "form[action=?][method=?]", fieldset_association_path(@fieldset_association), "post" do

      assert_select "input[name=?]", "fieldset_association[fieldset_id]"

      assert_select "input[name=?]", "fieldset_association[fieldable_id]"
    end
  end
end
