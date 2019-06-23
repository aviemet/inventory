['enum-typs', 'input-object-types', 'interface-types', 'object-types', 'scalar-types', 'union-types'].each do |dir|
  Dir[File.dirname(__FILE__) + "/#{dir}/*.rb"].each {|file| require file }
end

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :user, [Types::UserType], null: false do
      argument :id, ID, required: true
    end
    def user(id:)
      User.find(id)
    end
  end
end
