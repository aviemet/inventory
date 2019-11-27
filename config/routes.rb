Rails.application.routes.draw do

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'items#index'

  resources :items
  resources :purchases
  resources :people
  resources :tickets
  resources :vendors
  resources :networks
  resources :company

  ###
  # Moving from SPA to traditional rails app
  # Keep routing in case
  ###
  get '/', to: 'webapp#index'
  root to: 'webapp#index'

  # Route all non-API requests to the React app
  get '*path', to: 'webapp#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
