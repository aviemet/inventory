class ApplicationSerializer < Oj::Serializer
  include TypesFromSerializers::DSL

  identifier

  # # attribute :uid do |model|
  # #   model.encode_id unless model&.id.nil?
  # # end

  # view :new do
  #   excludes :id, :slug, :created_by_id, :updated_at, :created_at
  # end

  # view :edit do
  #   excludes :updated_at, :created_at
  # end

  # view :show do
  #   include_view :associations
  # end

  # view :index do
  #   include_view :associations
  # end

  # def self.attribute(method, options = {}, &)
  #   unexclude(method)
  #   super
  # end

  def currency_for(obj)
    obj&.cost&.amount&.to_f unless obj.cost.nil?
  end

  # def self.unexclude(attribute_name)
  #   current_view.excluded_attribute_names.delete attribute_name
  # end

  # def self.only(*attributes)
  #   all_attributes = view_collection[:default].attributes.keys.filter{ |f| !attributes.include? f }
  #   excludes(*all_attributes.filter{ |f| !attributes.include? f })
  #   attributes(*attributes)
  # end
end
