require "amazing_print"

module ViewComponentHelper
  def view(name, *args, **kwargs, &block)
    cache_keys = Array(args.delete(:cache))

    cache_if cache_keys.present?, cache_keys do
      return render_component_in(kwargs[:context], name, *args, **kwargs, &block) if kwargs[:context]

      return render component_class_for(name).new(*args, **kwargs), &block
    end
  end

  private

  def render_component_in(context, name, *args, **kwargs, &block)
    component_class_for(name).new(args, kwargs).render_in(context, &block)
  end

  def component_class_for(path)
    parts = path.to_s.split('/')
    class_name = parts.map(&:camelize).join('::')

    const = "#{class_name}Component".safe_constantize
    if const.nil?
      begin
        const = "#{class_name}::#{parts[-1].camelize}Component".constantize
      rescue NameError => e
        raise e
      end
    end
    const
  end
end
