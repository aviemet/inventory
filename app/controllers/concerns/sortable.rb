module Sortable
  extend ActiveSupport::Concern

  protected

  def sort(model)
    return unless sortable_fields.include?(params[:sort])

    # Force case insensitive sorting if field type is a string
    %w(string text).freeze.include?(field_type(model, params[:sort])) ? "lower(#{params[:sort]}) #{direction}" : params[:sort]
  end

  def direction
    return unless params[:direction]

    %w(asc desc).freeze.include?(params[:direction]) ? params[:direction] : 'asc'
  end
end
