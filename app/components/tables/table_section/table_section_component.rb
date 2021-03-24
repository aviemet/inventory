# frozen_string_literal: true

class Tables::TableSection::TableSectionComponent < ApplicationComponent
  renders_one :title
  renders_one :table, Tables::Table::TableComponent
  renders_one :pagination

  def initialize(table_preferences: {}, hideable_fields: {}, hideable: true, filterable: true, sortable: true, paginate: true)
    @table_preferences = table_preferences
    @hideable_fields = hideable_fields
    @hideable = hideable
    @filterable = filterable
    @sortable = sortable
    @paginate = paginate

    # TODO: Raise an error if the hideable fields don't match the fields on the table?
  end
end
