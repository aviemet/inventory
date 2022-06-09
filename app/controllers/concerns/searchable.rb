# frozen_string_literal: true

# When including Searchable in a controller, define the following methods:
#
#  sortable_fields:
#    returns an array of symbols or strings containing field names which the model can be sorted by.
#    Associated models should be in the form "model.field"

module Searchable
  extend ActiveSupport::Concern

  def search(model, sortable_fields = [])
    terms = params[:search]
    return model.order(sort(model, sortable_fields)) unless terms

    ids = model.search(terms).pluck(:id)
    model.where(id: ids).order(sort(model, sortable_fields))
  end

  protected

  def sort(model, sortable_fields)
    return unless sortable_fields&.include?(params[:sort])

    sort_str = params[:sort].to_s
    # Force case insensitive sorting if field type is a string
    if %i(string text).freeze.include?(field_type(model, params[:sort]))
      sort_str = "lower(#{sort_str})"
    end
    "#{sort_str} #{direction}"
  end

  def direction
    return unless params[:direction]

    %w(asc desc).freeze.include?(params[:direction]) ? params[:direction] : 'asc'
  end
end
