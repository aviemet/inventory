require_relative '../../app/lib/renderable'

module ActiveRecordExtensions
  # extend ActiveSupport::Concern

  # included do
  #   include Renderable::ClassMethods
  # end

  def serializer(view = nil)
    serializer_name(self.name, view).constantize
  end

  def serializer_name(name, view)
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
