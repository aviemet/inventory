require 'rails_helper'

RSpec.describe "fieldsets/edit", type: :view do
  before(:each) do
    @fieldset = assign(:fieldset, Fieldset.create!(
      name: "MyString",
      description: "MyText"
    ))
  end

  it "renders the edit fieldset form" do
    render

    assert_select "form[action=?][method=?]", fieldset_path(@fieldset), "post" do

      assert_select "input[name=?]", "fieldset[name]"

      assert_select "textarea[name=?]", "fieldset[description]"
    end
  end
end
