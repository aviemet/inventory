# frozen_string_literal: true

class Buttons::Delete::DeleteComponent < ApplicationComponent
  attr_reader :path

  def initialize(path:)
    @path = path
  end

end
