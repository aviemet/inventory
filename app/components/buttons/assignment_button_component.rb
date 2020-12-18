# frozen_string_literal: true

class Buttons::AssignmentButtonComponent < ViewComponent::Base
  def initialize(asset:)
    @asset = asset
  end
end
