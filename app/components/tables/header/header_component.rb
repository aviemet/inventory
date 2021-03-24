# frozen_string_literal: true

class Tables::Header::HeaderComponent < ApplicationComponent
  renders_many :rows, Tables::Row::RowComponent
end
