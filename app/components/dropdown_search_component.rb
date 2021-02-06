# frozen_string_literal: true

class DropdownSearchComponent < ApplicationComponent
  def initialize(data:, name:, value: nil, display_value: nil, form: nil, maxlength: false, minlength: false, pattern: false, min_max: false, readonly: false, placeholder: false)
    @options = { maxlength: maxlength, minlength: minlength, pattern: pattern, min_max: min_max, readonly: readonly, placeholder: placeholder, async: false }

    if data.is_a? String
      @options[:async] = true
      @options[:url] = data
    end

    @data = data
    @name = name
    @value = value
    @display_value = display_value || @data.detect { |e| e.last == value }.first rescue nil
    @form = form
  end
end
