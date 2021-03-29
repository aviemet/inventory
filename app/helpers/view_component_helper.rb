module ViewComponentHelper
  def view(name, context: nil, **args, &block)
    cache_keys = Array(args.delete(:cache))

    cache_if cache_keys.present?, cache_keys do
      return render_component_in(context, name, **args, &block) if context

      return render component_class_for(name).new(args), &block
    end
  end

  def render_component_in(context, name, **args, &block)
    component_class_for(name).new(args).render_in(context, &block)
  end

  private

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

    ap({ class_name: class_name, parts: parts, const: const })
    const
  end

  def namespace(file_name)
    file_path = component_path(file_name)
    File.dirname(file_path).split('/').last
  end

  def component_path(file_name)
    Dir.glob(File.join(Rails.root, 'app', 'components', '**', file_name + ".rb")).first
  end
end
