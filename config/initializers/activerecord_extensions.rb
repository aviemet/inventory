module ActiveRecordExtensions
  def serializer(view = nil)
    serializer_with_view(self.name, view).constantize
  end

  def serializer_with_view(name, view)
    if view
      "#{name.pluralize.camelize}::#{view.to_s.camelize}Serializer"
    else
      "#{name}Serializer"
    end
  end

  def render(view: nil, options: {})
    self.serializer(view).render(self, options)
  end
end

ActiveRecord::Relation.include ActiveRecordExtensions
