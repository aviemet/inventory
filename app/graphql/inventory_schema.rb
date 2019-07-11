class InventorySchema < GraphQL::Schema
  mutation Types::MutationType
  query Types::QueryType

  def self.id_from_object(obj, type, ctx)
    GraphQL::Schema::UniqueWithinType.encode(type.name, obj.id)
  end

  def self.object_from_id(id, ctx)
    type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(id)
    type_name.constantize.find(obj_id)
  end

  # Must register resolver for all types using globaly unique id
  def self.resolve_type(type, obj, ctx)
    case obj
    when User
      Types::UserType
    else
      raise("Unexpected objec: #{obj}")
    end
  end
end
