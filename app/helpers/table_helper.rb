module TableHelper
  def th_sortable(column, options = {})
    title = options[:title] || column.to_s.titleize
    sort = options[:sort] || column
    direction = params[:sort] == sort.to_s && params[:direction] == "asc" ? "desc" : "asc"

    classes = input_to_a(options[:class]).push("sortable")
    classes.push(direction) if params[:sort] == sort.to_s

    content_tag(
      :th,
      link_to(title.titleize, sort: sort, direction: direction),
      { class: classes.join(" ") }
    )
  end

  private

  def input_to_a(input)
    input.class == Array ? input : input.to_s.split(" ")
  end
end
