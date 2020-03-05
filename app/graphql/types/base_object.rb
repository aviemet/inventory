module Types
  class BaseObject < GraphQL::Schema::Object
    implements GraphQL::Relay::Node.interface
  end
end
