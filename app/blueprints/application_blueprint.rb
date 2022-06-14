class ApplicationBlueprint < Blueprinter::Base
  identifier :id do |model|
    model.encode_id unless model&.id.nil?
  end

  view :new do
    exclude :id
    exclude :created_by_id
    exclude :updated_at
    exclude :created_at
  end

  protected

  # Override methods to remove included fields from excluded fields list
  def self.field(method, options={}, &block)
    unexclude([method])
    super(method, options={}, &block)
  end

  def self.fields(*field_names)
    unexclude(field_names)
    super(*field_names)
  end

  private

  def self.currency_for(obj)
    obj&.cost&.amount.to_f
  end

  def self.only(*keys)
    excludes(*keys.filter{ |f| !only.include? f })
    fields(*keys)
  end

  def self.unexclude(*field_names)
    field_names.each { |n| current_view.excluded_field_names.delete n }
  end

  def self.only(*fields)
    all_fields = view_collection[:default].fields.keys.filter{ |f| !fields.include? f }
    excludes(*all_fields.filter{ |f| !fields.include? f })
    fields(*fields)
  end
end
