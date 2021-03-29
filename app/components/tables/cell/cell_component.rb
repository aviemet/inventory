# frozen_string_literal: true

class Tables::Cell::CellComponent < ApplicationComponent
  attr_reader :attributes

  def initialize(field, data: {}, classes: "", nowrap: true, **attrs)
    @field = field
    @attributes = build_attributes(data, classes, nowrap, attrs)
  end

  private

  def build_attributes(data, classes, nowrap, attrs)
    attributes = { data: data.merge({ target: "table.cell", "table-field-name": @field }) }
    attributes[:class] = classes.to_s if !classes.empty?
    attributes[:nowrap] = "nowrap" if nowrap
    attrs.each { |k, v| attributes[k] = v }
    attributes
  end
end
