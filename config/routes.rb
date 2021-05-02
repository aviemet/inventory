Rails.application.routes.draw do
  # CONCERNS #

  concern :contactable do
    resources :contacts, except: [:index] do
      resources :addresses
      resources :phones
      resources :emails
      resources :websites
    end
  end

  concern :categoryable do
    get "category/:category_id" => :category, on: :collection, as: :category
  end

  concern :clonable do
    get ":id/clone" => :clone, on: :collection, as: :clone
  end

  # STATIC PATHS #

  root to: "pages#home"
  get "pages/:page" => "pages#show"
  get "settings" => "pages#show", page: "settings"

  # DEVISE PATHS #

  devise_for :users, path: "/", path_names: { sign_in: "login", sign_out: "logout" }, only: [:sessions]
  devise_for :users, path_names: { sign_up: "register" }, skip: [:sessions]

  # RESOURCEFUL PATHS #

  resources :users, except: [:create]
  resources :companies, concerns: :contactable
  resources :ownerships

  resources :departments, concerns: :contactable
  resources :locations, concerns: :contactable

  resources :categories
  resources :status_types

  resources :items do
    resources :nics
    concerns :categoryable, :clonable
  end

  resources :accessories, concerns: :categoryable
  resources :consumables, concerns: :categoryable
  resources :licenses, concerns: :categoryable

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
