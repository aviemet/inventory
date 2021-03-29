# frozen_string_literal: true

class Tables::HeaderCell::HeaderCellComponent < ApplicationComponent
  attr_reader :attributes

  def initialize(name, heading: nil, hideable: true, sortable: true, sort: nil, classes: "", data: {}, **attrs)
    @name = name
    @hideable = hideable
    @sortable = sortable
    @sort = sort || name
    @heading = heading || name.to_s.titleize
    @attributes = build_attributes(classes, data, hideable, sortable, sort, attrs)
  end

  private

  def before_render
    if @sortable
      attributes[:class] += direction if params[:sort] == @sort.downcase
    end
  end

  def build_attributes(classes, data, hideable, sortable, _sort, attrs)
    attributes = attrs.each { |k, v| attributes[k] = v }
    attributes[:class] = ""
    attributes[:class] = classes.to_s if !classes.empty?
    attributes[:class] += " sortable" if sortable
    attributes[:nowrap] = "nowrap"

    if hideable
      attributes[:data] = data.merge({ target: "table.heading", "table-field-name": @field })
    end
    attributes
  end

  def input_to_a(input = nil)
    return [] if input.nil?

    input.class == Array ? input : input.to_s.split(" ")
  end
end
