# frozen_string_literal: true

class Tables::Row::RowComponent < ApplicationComponent
  renders_many :cells, Tables::HeaderCell::HeaderCellComponent
end
