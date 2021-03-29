# frozen_string_literal: true

class Tables::Cell::SelectCellComponent < ApplicationComponent
  def initialize(record)
    @record = record
  end
end
