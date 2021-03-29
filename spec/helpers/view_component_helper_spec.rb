require 'rails_helper'

RSpec.describe ViewComponentHelper, type: :helper do
  describe "#view" do
    it "renderes a view component"
  end

  describe "#render_component_in" do
    it "returns an empty array if passed nothing"
  end

  describe.skip "#component_class_for" do
    it "returns the full classname of a component from a string or symbol" do
      expect(helper.component_class_for('tables/table')).to eq Tables::Table::TableComponent
      expect(helper.component_class_for('tables/table/table')).to eq Tables::Table::TableComponent
      expect { helper.component_class_for('tables/missing') }.to raise_error(NameError)
    end
  end
end
