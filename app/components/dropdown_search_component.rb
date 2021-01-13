# frozen_string_literal: true

class DropdownSearchComponent < ApplicationComponent
  def initialize(data:, name:, value: nil, form: nil)
    if data.any?{ |m| m.is_a? ActiveRecord::Base }
      @data = data.map{ |r| [r.to_s, r.id] }
    else
      @data = data
    end

    @name = name
    @value = value
    @display_value = @data.detect { |e| e.last == value }.first rescue nil
    @form = form
  end
end
