if Rails.env.development?
  TypesFromSerializers.config do |config|
    config.base_serializers = ["ApplicationSerializer"]
    config.global_types.merge(["TAssignToable", "TAssignable"])
    config.sql_to_typescript_type_mapping.update(
      inet: :string,
      cidr: :string,
    )
    config.namespace = "Schema"
    config.indentation = :tabs
    config.transform_keys = ->(key) { key }
  end
end
