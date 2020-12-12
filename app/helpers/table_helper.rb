module TableHelper
  def data_heading(field, options = {})
    heading = options[:heading] || field.to_s.titleize
    sort = options[:sort] || field
    direction = params[:sort] == sort.to_s && params[:direction] == "asc" ? "desc" : "asc"

    attributes = default_attributes(options)

    unless options[:sortable] == false
      attributes[:class].push("sortable")
      attributes[:class].push(direction) if params[:sort] == sort.to_s
    end

    unless options[:hideable] == false
      attributes[:data][:target] = "table.heading"
      attributes[:data]["table-field-name"] = field
    end
    attributes[:data].merge(options[:data]) if options[:data]

    content_tag(
      :th,
      link_to(heading, sort: sort, direction: direction),
      attributes
    )
  end

  # data_cell(:field, content)
  # data_cell(:title, link_to(item.title, item))

  def data_cell(field, content, options = {})
    attributes = default_attributes(options)

    attributes[:data] = { target: "table.cell", "table-field-name": field }
    attributes[:data].merge(options[:data]) if options[:data]

    content_tag(:td, content, attributes)
  end

  private

  def default_attributes(options)
    attributes = { class: input_to_a(options[:class]), data: {} }
    attributes[:id] = options[:id] if options[:id]
    attributes
  end

  def input_to_a(input)
    return [] if input.nil?

    input.class == Array ? input : input.to_s.split(" ")
  end
end
