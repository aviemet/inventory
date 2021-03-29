# frozen_string_literal: true

class Tables::Body::BodyComponent < ApplicationComponent
  renders_many :rows, "BodyRowComponent"

  class BodyRowComponent < Tables::Row::RowComponent
    def initialize(classes: "", data: {})
      @classes = classes
      @data = data.merge({"table-target" => "row"})
    end
  end

  def cell(*args)
    Tables::Cell::CellComponent.new(*args)
  end

  def select_cell(*args)
    render Tables::Cell::SelectCellComponent.new(*args)
  end
end
