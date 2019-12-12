module Types
  class QueryType < Types::BaseObject
    include ::ActionController::Cookies

    field :logged_in_user, Types::UserType, null: false
    def logged_in_user
      if context[:current_user]
        type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
        if User.exists?(obj_id)
          return User.find(obj_id)
        end
      end

      return nil
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

    field :companies, [Types::CompanyType], null: true
    def companies
      if context[:current_user]
        type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
        return Company.joins(:users).where(users: {id: obj_id})
      end
      return nil
    end

    field :departments, [Types::DepartmentType], null: true
    def departments
      return nil unless context[:current_user]
      type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
      User.find(obj_id).active_company.departments      
    end

    field :items, [Types::ItemType], null: true
    def items
      return nil unless context[:current_user]
      type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
      User.find(obj_id).active_company.items
    end
    
    field :contracts, [Types::ContractType], null: true
    def contracts
      return nil unless context[:current_user]
      type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
      User.find(obj_id).active_company.contracts
    end

    field :vendors, [Types::VendorType], null: true
    def vendors
      return nil unless context[:current_user]
      type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
      User.find(obj_id).active_company.vendors
    end

    field :networks, [Types::NetworkType], null: true
    def networks
      return nil unless context[:current_user]
      type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
      User.find(obj_id).active_company.networks
    end

    field :people, [Types::PersonType], null: true
    def people
      return nil unless context[:current_user]
      type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
      User.find(obj_id).active_company.people
    end

  end
end
