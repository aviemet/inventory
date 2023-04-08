if Rails.env.development?
  TypesFromSerializers.config do |config|
    config.base_serializers = ["ApplicationSerializer"]
    config.sql_to_typescript_type_mapping.update(
      inet: :string,
      cidr: :string,
    )
    config.namespace = "Schema"
    config.indentation = :tabs
  end
end
