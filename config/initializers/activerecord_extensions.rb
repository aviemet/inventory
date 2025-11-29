require_relative "../../app/lib/renderable"

# Add the `render` method to call serializers from AR models and collections
module ActiveRecordExtensions
  extend ActiveSupport::Concern

  included do
    include Renderable::ClassMethods
  end
end

ActiveRecord::Relation.include ActiveRecordExtensions

# Tell AR to use the sublcass of STI models in polymorphic _type fields
ActiveRecord::Base.store_base_sti_class = false
