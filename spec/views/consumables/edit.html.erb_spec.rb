require 'rails_helper'

RSpec.describe "consumables/edit", type: :view do
  before(:each) do
    @consumable = assign(:consumable, Consumable.create!())
  end

  it "renders the edit consumable form" do
    render

    assert_select "form[action=?][method=?]", consumable_path(@consumable), "post" do
    end
  end
end
