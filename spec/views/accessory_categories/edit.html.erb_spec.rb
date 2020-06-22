require 'rails_helper'

RSpec.describe "accessory_categories/edit", type: :view do
  before(:each) do
    @accessory_category = assign(:accessory_category, AccessoryCategory.create!(
      name: "MyString",
      notes: "MyString"
    ))
  end

  it "renders the edit accessory_category form" do
    render

    assert_select "form[action=?][method=?]", accessory_category_path(@accessory_category), "post" do

      assert_select "input[name=?]", "accessory_category[name]"

      assert_select "input[name=?]", "accessory_category[notes]"
    end
  end
end
