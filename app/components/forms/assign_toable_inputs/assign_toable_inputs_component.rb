# frozen_string_literal: true

class Forms::AssignToableInputs::AssignToableInputsComponent < ApplicationComponent
  attr_reader :form, :company, :except

  def initialize(form:, company:, except: [])
    @form = form
    @company = company
    @except = except
  end
end
