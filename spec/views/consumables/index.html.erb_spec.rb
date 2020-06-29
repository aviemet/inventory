require 'rails_helper'

RSpec.describe "consumables/index", type: :view do
  before(:each) do
    assign(:consumables, [
      Consumable.create!(),
      Consumable.create!()
    ])
  end

  it "renders a list of consumables" do
    render
  end
end
