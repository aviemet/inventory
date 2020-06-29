require 'rails_helper'

RSpec.describe "consumables/new", type: :view do
  before(:each) do
    assign(:consumable, Consumable.new())
  end

  it "renders new consumable form" do
    render

    assert_select "form[action=?][method=?]", consumables_path, "post" do
    end
  end
end
