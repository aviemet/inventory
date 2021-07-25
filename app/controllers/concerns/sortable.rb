module Sortable
  extend ActiveSupport::Concern

  protected

  def sort(model)
    return unless sortable_fields.include?(params[:sort])

    sort_str = "#{params[:sort]}"
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
