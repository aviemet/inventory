# frozen_string_literal: true

class DropdownSearchComponent < ApplicationComponent
  def initialize(data:, name: nil, form: nil)
    @data = data
    @name = name
    @form = form
  end
end
