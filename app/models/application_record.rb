class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

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

  def self.blueprint
    "#{self.name}Blueprint".constantize
  end

  def blueprint
    "#{self.class.name}Blueprint".constantize
  end

  def render(**args)
    self.blueprint.render_as_json(self, **args)
  end
end
