# frozen_string_literal: true

class Tags::DateTime::DateTimeComponent < ApplicationComponent
  attr_reader :date
  attr_reader :format

  def initialize(date:, format: :long)
    @date = date
    @format = format
  end
end
