class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput
  # def input(wrapper_options)
  #   template.content_tag(:div, super, class: "select-wrapper")
  # end

  def input(wrapper_options = nil)
    ap @builder.object[attribute_name]
    merged_input_options = merge_wrapper_options(input_html_options, wrapper_options)

    # ap options
    @builder.template.render(
      DropdownSearchComponent.new(
        data: options[:collection],
        value: @builder&.object.try(attribute_name),
        name: attribute_name,
        form: @builder
      ), merged_input_options
    )
  end
end
