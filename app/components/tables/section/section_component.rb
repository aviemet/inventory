# frozen_string_literal: true

class Tables::Section::SectionComponent < ApplicationComponent
  renders_one :title
  renders_one :button_link, "ButtonLinkComponent"
  renders_one :table, Tables::Table::TableComponent
  renders_one :pagination

  attr_reader :hideable_fields, :table_preferences, :name, :paginate

  def initialize(table_preferences: {}, hideable_fields: {}, name: nil, hideable: true, filterable: true, sortable: true, paginate: true)
    @table_preferences = table_preferences.to_json
    @hideable_fields = hideable_fields
    @name = name
    @hideable = hideable
    @filterable = filterable
    @sortable = sortable
    @paginate = paginate

    # TODO: Raise an error if the hideable fields don't match the fields on the table?
  end

  class ButtonLinkComponent < ViewComponent::Base
    def call
      content_tag :div, content, { class: "m-1 mr-0 md:order-last"}
    end
  end
end
