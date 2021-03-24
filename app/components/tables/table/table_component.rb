# frozen_string_literal: true

class Tables::Table::TableComponent < ApplicationComponent
  renders_one :head, Tables::Header::HeaderComponent
  renders_one :body

  def initialize(scroll: false)
    @scroll = scroll
  end
end
