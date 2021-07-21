# frozen_string_literal: true

class Forms::NestedPartial::NestedPartialComponent < ApplicationComponent
  attr_reader :partial
  attr_reader :form
  attr_reader :field
  attr_reader :legend

  def initialize(partial:, form:, field:, legend: nil)
    @partial = partial
    @form = form
    @field = field
    @legend = legend
  end
end
