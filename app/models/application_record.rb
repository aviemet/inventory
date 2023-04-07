class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  include PublicActivity::Model
  tracked owner: proc{ |controller, _model| controller&.current_user || nil }

  # def to_param
  #   encode_id
  # end

  @@separator = " "

  def encode_id
    return if self.id.nil?

    Base64.strict_encode64("#{self.class.name}#{@@separator}#{self.id}")
  end

  def self.decode_id(encoded_id)
    parts = Base64.decode64(encoded_id).split(@@separator)
    {
      model: parts[0],
      id: parts[1]
    }
  end

  def self.serializer(view = nil)
    serializer_with_view(self.name, view).constantize
  end

  def serializer(view = nil)
    serializer_with_view(self.class.name, view).constantize
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
