# frozen_string_literal: true

class Tables::HeaderCell::HeaderCellComponent < ApplicationComponent
  def initialize(name, heading: nil, hideable: true, sortable: true)
    @name = name
    @heading = heading || name.to_s.titleize
    @hideable = hideable
    @sortable = sortable
  end
end
