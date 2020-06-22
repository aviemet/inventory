require 'rails_helper'

RSpec.describe "accessory_categories/new", type: :view do
  before(:each) do
    assign(:accessory_category, AccessoryCategory.new(
      name: "MyString",
      notes: "MyString"
    ))
  end

  it "renders new accessory_category form" do
    render

    assert_select "form[action=?][method=?]", accessory_categories_path, "post" do

      assert_select "input[name=?]", "accessory_category[name]"

      assert_select "input[name=?]", "accessory_category[notes]"
    end
  end
end
