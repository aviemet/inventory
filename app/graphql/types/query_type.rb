module Types
  class QueryType < Types::BaseObject

    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :user, [Types::UserType], null: false do
      argument :user_query_input, [Types::UserQueryInput], required: true
    end
    def user(user_query_input:)
      id = user_query_input[0]&.[](:id)
      type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(id)
      email = user_query_input[0]&.[](:email)

      puts "Unique"
      puts type_name
      puts obj_id

      if id
        [User.find(obj_id)]
      elsif email
        [User.find_by_email(email)]
      end
    end
  end
end
