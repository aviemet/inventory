# frozen_string_literal: true

class Buttons::CheckoutType::CheckoutTypeComponent < ApplicationComponent
  attr_reader :company

  def initialize(company:)
    @company = company
  end
end
