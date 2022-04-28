class ApplicationBlueprint < Blueprinter::Base
  identifier :id do |model|
    model.encode_id unless model.id.nil?
  end

  view :new do
    exclude :id
    exclude :updated_at
    exclude :created_at
  end
end