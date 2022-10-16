# frozen_string_literal: true

module Searchable
  extend ActiveSupport::Concern

  ##
  # Searches and sorts model using search params
  # model: ActiveRecord object
  # sortable_fields: string array of field names which the model can be sorted by.
  #   Sortable fields in nested models use dot-notation: "related_model.field"
  #
  def search(model, sortable_fields = [])
    search_object = model

    terms = params[:search]

    if terms
      ids = model.search(terms).pluck(:id)
      search_object = model.where(id: ids)
    end

    if current_user.table_preferences[model.name.downcase.pluralize]
      hidden_fields = current_user.table_preferences[model.name.downcase.pluralize]["hide"]
      hidden_fields = hidden_fields.filter{|key, val| val == true}.map{|el| el[0]}
      # search_object = hide(search_object, hidden_fields)
    end

    search_object.order(sort(model, sortable_fields))
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

  def hide(model, fields)
    return model if fields.size < 1

    # this needs to be done with a Map or something

    # attributes = []
    fields.each do |field|
      parts = field.split(".")

      if parts.size > 1
        attributes = parts[-2].constantize.attribute_names
      end


    end

    return model.select(fields.join(", "))
  end
end
