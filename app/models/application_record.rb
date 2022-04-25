class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  @@separator = " "

  def encode_id
    Base64.encode64("#{self.class.name}#{@@separator}#{self.id}")
  end

  def self.decode_id(encoded_id)
    parts = Base64.decode64(encoded_id).split(@@separator)
    {
      model: parts[0],
      id: parts[1]
    }
  end
end
