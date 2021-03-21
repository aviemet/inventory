# frozen_string_literal: true

class Buttons::AssignmentButton::AssignmentButtonComponent < ViewComponent::Base
  def initialize(asset:)
    @asset = asset
  end
end
