# frozen_string_literal: true

class Tables::ColumnPicker::ColumnPickerComponent < ApplicationComponent
  attr_reader :hideable_fields

  def initialize(hideable_fields:)
    @hideable_fields = hideable_fields
  end

end
