require 'rails_helper'

RSpec.describe "consumables/show", type: :view do
  before(:each) do
    @consumable = assign(:consumable, Consumable.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
