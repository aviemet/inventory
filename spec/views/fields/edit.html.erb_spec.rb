require 'rails_helper'

RSpec.describe "fields/edit", type: :view do
  before(:each) do
    @field = assign(:field, Field.create!(
      name: "MyString",
      format: "MyString",
      element: "MyString",
      description: "MyString",
      notes: "MyText"
    ))
  end

  it "renders the edit field form" do
    render

    assert_select "form[action=?][method=?]", field_path(@field), "post" do

      assert_select "input[name=?]", "field[name]"

      assert_select "input[name=?]", "field[format]"

      assert_select "input[name=?]", "field[element]"

      assert_select "input[name=?]", "field[description]"

      assert_select "textarea[name=?]", "field[notes]"
    end
  end
end
