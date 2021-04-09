# frozen_string_literal: true

class Buttons::Assignment::AssignmentComponent < ApplicationComponent
  attr_reader :asset

  def initialize(asset:)
    raise(ArgumentError, "#{asset.class.name} is not Assignable") unless asset.class.include? Assignable

    @asset = asset
  end
end
