# frozen_string_literal: true

class Tables::Row::RowComponent < ApplicationComponent
  def initialize(classes: "", data: {})
    @classes = classes
    @data = data
  end
end
