# frozen_string_literal: true

class ScrollingTabs::ScrollingTabsComponent < ApplicationComponent
  renders_one :tabs
  renders_many :sections

  attr_reader :section_names

  def initialize(*section_names)
    @section_names = section_names
  end

end
