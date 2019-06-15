Rails.application.routes.draw do

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'webapp#index'
  root to: 'webapp#index'

  # Route all non-API requests to the React app
  get '*path', to: 'webapp#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
