module TableHelper
  def sortable(column, title = nil)
    title ||= column.titleize
    direction = column == sort_column && sort_direction == "asc" ? "desc" : "asc"
    link_to title, sort: column, direction: direction
  end

  def th_sortable(column, options = {})
    title = options[:title] || column.to_s.titleize
    sort = options[:sort] || column
    direction = params[:sort] == sort.to_s && params[:direction] == "asc" ? "desc" : "asc"
    classes = string_or_array_to_s(options[:class]) + " sortable"

    content_tag(
      "th".freeze,
      link_to(title.titleize, sort: sort, direction: direction),
      { class: classes.strip }
    )
  end

  private

  def string_or_array_to_s(input)
    return "" unless input
    return input.join(" ") if input.class == Array
    return input.to_s if [String, Symbol].include? input.class
  end
end
