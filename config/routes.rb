Rails.application.routes.draw do
  default_url_options Rails.application.config.action_mailer.default_url_options
  
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/logout', to: 'webapp#logout_user'
  get '/', to: 'webapp#index'
  root to: 'webapp#index'

  # Route all non-API requests to the React app
  get '*path', to: 'webapp#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
