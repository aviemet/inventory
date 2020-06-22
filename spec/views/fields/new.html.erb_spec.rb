require 'rails_helper'

RSpec.describe "fields/new", type: :view do
  before(:each) do
    assign(:field, Field.new(
      name: "MyString",
      format: "MyString",
      element: "MyString",
      description: "MyString",
      notes: "MyText"
    ))
  end

  it "renders new field form" do
    render

    assert_select "form[action=?][method=?]", fields_path, "post" do

      assert_select "input[name=?]", "field[name]"

      assert_select "input[name=?]", "field[format]"

      assert_select "input[name=?]", "field[element]"

      assert_select "input[name=?]", "field[description]"

      assert_select "textarea[name=?]", "field[notes]"
    end
  end
end
