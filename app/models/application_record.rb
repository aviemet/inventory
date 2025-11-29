class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # Add .render method to ActiveRecord objects. Located in app/lib/renderable
  include Renderable

  include PublicActivity::Model
  tracked owner: proc{ |controller, _model| controller&.current_user || nil }

  scope :includes_associated, -> { includes([]) }

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

end
