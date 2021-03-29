# frozen_string_literal: true

class Buttons::Edit::EditComponent < ApplicationComponent
  attr_reader :path

  def initialize(path: nil)
    @path = path
  end
end
