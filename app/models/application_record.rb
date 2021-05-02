class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  cattr_accessor :current_user

  def self.to_s_field
    default_stringify_field = :name
    table = self.to_s.downcase.pluralize
    default_stringify_field if ActiveRecord::Base.connection.table_exists?(table) && ActiveRecord::Base.connection.column_exists?(table, default_stringify_field)
  end

  def to_s
    if self.is_a?(ApplicationRecord) && self.class.to_s_field
      self.public_send self.class.to_s_field
    else
      super
    end
  end

  def self.includes_associated
    if defined? self.associated_models
      includes(self.associated_models)
    else
      raise StandardError, "associated_models is not defined on #{self.class.name}"
    end
  end

end
