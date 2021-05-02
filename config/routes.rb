Rails.application.routes.draw do
  root to: "pages#home"

  concern :contactable do
    resources :contacts, except: [:index] do
      resources :addresses
      resources :phones
      resources :emails
      resources :websites
    end
  end

  get "pages/:page" => "pages#show"
  get "settings" => "pages#show", page: "settings"

  devise_for :users, path: "/", path_names: { sign_in: "login", sign_out: "logout" }, only: [:sessions]
  devise_for :users, path_names: { sign_up: "register" }, skip: [:sessions]

  resources :users, except: [:create]

  resources :ownerships

  resources :status_types

  resources :companies, concerns: :contactable

  resources :departments, concerns: :contactable
  resources :locations, concerns: :contactable

  resources :categories

  resources :items do
    resources :nics
    get "category/:category_id", to: "items#category", on: :collection
  end
  get "items/:id/clone", to: "items#clone"

  resources :accessories
  resources :consumables

  resources :assignments, path: "assignments/:asset_type/:asset_id", only: [:edit, :index, :create]
  resources :assignments, only: [:show, :update, :destroy]
  # Use /checkout & /checkin as a verb in the url to define asset assigments
  get "checkout/:asset_type/:asset_id", to: "assignments#new", as: :new_assignment
  get "checkin/:asset_type/:asset_id", to: "assignments#end", as: :end_assignment
  patch "assignments/checkin/:asset_type/:asset_id", to: "assignments#checkin"
  put "assignments/checkin/:asset_type/:asset_id", to: "assignments#checkin"

  resources :people, concerns: :contactable

  resources :vendors, concerns: :contactable

  resources :models
  resources :manufacturers, concerns: :contactable
  resources :licenses
  resources :warranties, concerns: :contactable

  resources :fields
  resources :fieldsets
  resources :fieldset_associations

  resources :ip_leases
  resources :networks

  resources :orders
  resources :purchases

  resources :contracts
end
