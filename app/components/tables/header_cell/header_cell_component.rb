# frozen_string_literal: true

class Tables::HeaderCell::HeaderCellComponent < ApplicationComponent
  attr_reader :attributes, :heading, :sort, :direction, :sortable

  def initialize(name, heading: nil, sortable: true, sort: nil, classes: [], data: {}, **attrs)
    @name = name
    @sortable = sortable
    @sort = sort&.to_s || name.to_s
    @heading = heading || name.to_s.titleize
    @attributes = build_attributes(name, classes, data, sortable, attrs)
  end

  private

  def before_render
    if @sortable
      @direction = params[:sort] == sort.to_s && params[:direction] == "asc" ? "desc" : "asc"
      attributes[:class].push(@direction) if params[:sort] == @sort.downcase
    end
    attributes[:class] = attributes[:class].join(" ")
  end

  def build_attributes(name, classes, data, sortable, attrs)
    attributes = attrs.each { |k, v| attributes[k] = v }

    attributes[:class] = input_to_a(classes)
    attributes[:class].push("sortable") if sortable
    attributes[:nowrap] = "nowrap"

    if sortable
      attributes[:data] = data.merge({ target: "table.heading", "table-field-name": name })
    end
    attributes
  end

  def input_to_a(input = nil)
    return [] if input.nil?

    input.instance_of?(Array) ? input : input.to_s.split
  end
end
