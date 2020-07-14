require 'rails_helper'

RSpec.describe "consumable_categories/edit", type: :view do
  before(:each) do
    @consumable_category = assign(:consumable_category, ConsumableCategory.create!(
      name: "MyString",
      notes: "MyText"
    ))
  end

  it "renders the edit consumable_category form" do
    render

    assert_select "form[action=?][method=?]", consumable_category_path(@consumable_category), "post" do

      assert_select "input[name=?]", "consumable_category[name]"

      assert_select "textarea[name=?]", "consumable_category[notes]"
    end
  end
end
