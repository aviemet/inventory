class DateTimeInput < SimpleForm::Inputs::DateTimeInput
  def input(wrapper_options)
    value = @builder.object.send(attribute_name)
    input_html_options[:value] = case value
                                 when Date, Time, DateTime
                                   format = options[:format] || :medium
                                   value.to_s(format)
                                 else
                                   value.to_s
                                 end

    input_html_options["data-controller"] = "flatpickr"
    input_html_options["data-flatpickr-alt-input"] = true
    input_html_options["data-flatpickr-alt-format"] = t("date.formats.long")

    if @options.include? :flatpickr
      @options[:flatpickr].each do |key, val|
        input_html_options["data-flatpickr-#{key.to_s.sub('_', '-')}"] = val
      end
    end
    
    merged_input_options = merge_wrapper_options(input_html_options, wrapper_options)

    @builder.text_field(attribute_name, merged_input_options)
  end
end
