# frozen_string_literal: true

class DropdownSearchComponent < ApplicationComponent
  def initialize(data:, name:, value: nil, form: nil, maxlength: false, minlength: false, pattern: false, min_max: false, readonly: false, placeholder: false)

    @data = active_record_collection?(data) ? data.map{ |r| [r.to_s, r.id] } : data

    @name = name
    @value = value
    @display_value = @data.detect { |e| e.last == value }.first rescue nil
    @form = form
  end

  def active_record_collection?(data)
    return false if data.nil?

    data.any?{ |m| m.is_a? ActiveRecord::Base }
  end
end
