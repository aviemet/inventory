require 'rails_helper'

RSpec.describe "consumable_categories/new", type: :view do
  before(:each) do
    assign(:consumable_category, ConsumableCategory.new(
      name: "MyString",
      notes: "MyText"
    ))
  end

  it "renders new consumable_category form" do
    render

    assert_select "form[action=?][method=?]", consumable_categories_path, "post" do

      assert_select "input[name=?]", "consumable_category[name]"

      assert_select "textarea[name=?]", "consumable_category[notes]"
    end
  end
end
