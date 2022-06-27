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

  def self.field(method, options={}, &block)
    unexclude(method)
    super
  end

  private

  def self.currency_for(obj)
    obj&.cost&.amount&.to_f unless obj.cost.nil?
  end

  def self.unexclude(field_name)
    current_view.excluded_field_names.delete field_name
  end

  def self.only(*fields)
    all_fields = view_collection[:default].fields.keys.filter{ |f| !fields.include? f }
    excludes(*all_fields.filter{ |f| !fields.include? f })
    fields(*fields)
  end
end
