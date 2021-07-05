# frozen_string_literal: true

# When including Searchable in a controller, define the following methods:
#  searchable_object:
#    returns the object to search on, scoped, chained, etc.
#
#  sortable_fields:
#    returns an array of symbols or strings containing field names which the model can be sorted by.
#    Associated models should be in the form "model.field"

# To avoid n+1 queries on search results, define the following methods on the model:
#  self.associated_models:
#    returns an array of associated models to be included in the query

# To add the ability to highlight the search text in search results, define the following method on the model:
#  self.highlight_fields:
#    returns an array of fields to enable highlighting for
#    These fields must be set to `stored: true` in the search definition on the model

module Searchable
  extend ActiveSupport::Concern

  def search(model, terms, page = 1)
    searchable_object.search do
      if model.associated_models
        data_accessor_for(model).include = model.associated_models
      end
      fulltext terms do
        query_phrase_slop 1
        model.highlight_fields&.each do |field|
          highlight field
        end
      end
      paginate page: page
      order_by(sunspot_sort_param, direction) if sortable_fields&.include?(params[:sort])
    end.results
  end

  def sunspot_sort_param
    return "" unless sortable_fields&.include?(params[:sort])

    parts = params[:sort].split(".")
    sort = parts.length > 1 ? parts[0].singularize : params[:sort]
    "sort_#{sort}"
  end
end
