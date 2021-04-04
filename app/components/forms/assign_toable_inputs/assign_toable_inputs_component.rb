# frozen_string_literal: true

class Forms::AssignToableInputs::AssignToableInputsComponent < ApplicationComponent
  attr_reader :form
  attr_reader :company

  def initialize(form:, company:)
    @form = form
    @company = company
  end
end
