# frozen_string_literal: true

class Forms::CompanyNestedInput::CompanyNestedInputComponent < ApplicationComponent
  attr_reader :form
  attr_reader :company
  attr_reader :companies
  attr_reader :active_company

  def initialize(form:, company:, companies:, active_company: nil)
    @form = form
    @company = company
    @companies = companies
    @active_company = active_company
  end

end
