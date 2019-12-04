module Types
  class QueryType < Types::BaseObject
    include ::ActionController::Cookies

    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :logged_in_user, Types::UserType, null: false
    def logged_in_user
      if context[:current_user]
        type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
        User.find(obj_id)
      else
        return nil
      end
    end

    field :user, Types::UserType, null: false do
      argument :user_query_input, [Types::UserQueryInput], required: true
    end
    def user(user_query_input:)
      id = user_query_input[0]&.[](:id)
      email = user_query_input[0]&.[](:email)

      if id
        type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(id)
        User.find(obj_id)
      elsif email
        User.find_by_email(email)
      end
    end

    
  end
end
