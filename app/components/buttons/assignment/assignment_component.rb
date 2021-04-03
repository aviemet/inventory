# frozen_string_literal: true

class Buttons::Assignment::AssignmentComponent < ApplicationComponent
  def initialize(asset:)
    @asset = asset.is_a?(Draper::Decorator) ? asset.model : asset
  end
end
