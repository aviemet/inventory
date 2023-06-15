if Rails.env.development?
  TypesFromSerializers.config do |config|
    config.base_serializers = ["ApplicationSerializer"]
    config.global_types.merge(["TAssignToable", "TAssignable"])
    config.sql_to_typescript_type_mapping.update(
      inet: :string,
      cidr: :string,
      json: "Record<string, string>",
      jsonb: "Record<string, string>",
    )
    config.namespace = "Schema"
    config.transform_keys = ->(key) { key }
  end
end
