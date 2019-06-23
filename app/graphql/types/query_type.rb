# ['enum_typs', 'input_object_types', 'interface_types', 'object_types', 'scalar_types', 'union_types'].each do |dir|
#   Dir[File.dirname(__FILE__) + "/#{dir}/*.rb"].each {|file| require file }
# end

module Types
  class QueryType < BaseObject

    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :user, [Types::UserType], null: false do
      argument :user_query_input, [Types::UserQueryInput], required: true
    end
    def user(user_query_input:)
      id = user_query_input[0]&.[](:id)
      email = user_query_input[0]&.[](:email)
      if id
        [User.find(id)]
      elsif email
        [User.find_by_email(email)]
      end
    end
  end
end
