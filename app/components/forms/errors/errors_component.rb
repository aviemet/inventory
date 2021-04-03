# frozen_string_literal: true

class Forms::Errors::ErrorsComponent < ApplicationComponent
  attr_reader :record
  
  def initialize(record:)
    @record = record
  end

end
