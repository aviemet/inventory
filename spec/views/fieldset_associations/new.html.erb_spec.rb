require 'rails_helper'

RSpec.describe "fieldset_associations/new", type: :view do
  before(:each) do
    assign(:fieldset_association, FieldsetAssociation.new(
      fieldset: nil,
      fieldable: nil
    ))
  end

  it "renders new fieldset_association form" do
    render

    assert_select "form[action=?][method=?]", fieldset_associations_path, "post" do

      assert_select "input[name=?]", "fieldset_association[fieldset_id]"

      assert_select "input[name=?]", "fieldset_association[fieldable_id]"
    end
  end
end
