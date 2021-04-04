# frozen_string_literal: true

class Forms::DropdownSearch::DropdownSearchComponent < ApplicationComponent
  attr_reader :form
  attr_reader :name
  attr_reader :options
  attr_reader :data
  attr_reader :value

  def initialize(data:, name:, value: nil, display_value: nil, form: nil, maxlength: false, minlength: false, pattern: false, min_max: false, readonly: false, placeholder: false)
    @form = form
    @data = data
    @name = name
    @value = value

    @options = { maxlength: maxlength, minlength: minlength, pattern: pattern, min_max: min_max, readonly: readonly, placeholder: placeholder, async: false }

    if data.is_a? String
      @options[:async] = true
      @options[:url] = data
    end

    @display_value = begin
                       display_value || @data.detect { |e| e.last == value }.first
                     rescue StandardError
                       nil
                     end

    @id = SecureRandom.hex(4)
  end
end
