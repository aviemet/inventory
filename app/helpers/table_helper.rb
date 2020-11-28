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

    classes = input_to_a(options[:class]).push("sortable")
    classes.push(direction) if params[:sort] == sort.to_s

    content_tag(
      "th".freeze,
      link_to(title.titleize, sort: sort, direction: direction),
      { class: classes.join(" ") }
    )
  end

  private

  def input_to_a(input)
    return input if input.class == Array

    input.to_s.split(" ")
  end
end
