class ApplicationBlueprint < Blueprinter::Base
  identifier :id do |model|
    model.encode_id
  end
end