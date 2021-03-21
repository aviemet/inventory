class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput
  def input(wrapper_options = nil)
    merged_input_options = merge_wrapper_options(input_html_options, wrapper_options)

    if options[:searchable] == false || options[:collection].nil?
      template.content_tag(:div, super, class: "select-wrapper")
    else
      filterable_select merged_input_options
    end
  end

  def filterable_select(merged_input_options)
    @builder.template.render(
      Forms::DropdownSearch::DropdownSearchComponent.new(
        data: options[:collection],
        value: @builder&.object.try(attribute_name),
        display_value: @builder&.object.try(reflection.name),
        name: attribute_name,
        form: @builder
      ), merged_input_options
    )
  end
end
