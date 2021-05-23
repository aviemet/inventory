# frozen_string_literal: true

class Tables::Header::HeaderComponent < ApplicationComponent
  renders_many :rows, Tables::Row::RowComponent

  def cell(*args, **kwargs)
    render Tables::HeaderCell::HeaderCellComponent.new(*args, **kwargs)
  end

  def select_all_cell
    render Tables::HeaderCell::SelectAllCellComponent.new
  end
end
