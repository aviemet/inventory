class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput
  def input(wrapper_options)
    template.content_tag(:div, super, class: "select-wrapper")
  end
end