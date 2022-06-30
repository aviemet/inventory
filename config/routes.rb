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

  concern :assignable do
    get "checkout", on: :member, as: :checkout
    get "checkin", on: :member, as: :checkin
  end

  # STATIC PATHS #

  root "pages#dashboard"
  get "dashboard" => "pages#dashboard", as: :dashboard
  get "settings" => "pages#settings", as: :settings

  # DEVISE PATHS #

  devise_for :users, controllers: {
    sessions: "users/sessions"
  },
  path: "/",
  path_names: {
    sign_in: "login",
    sign_out: "logout"
  },
  only: [:sessions]

  devise_for :users, controllers: {
    passwords: "users/passwords",
    registrations: "users/registrations",
    unlocks: "users/unlocks",
    confirmations: "users/confirmations",
    # omniauth_callbacks: "users/omniauth_callbacks",
  },
  path_names: {
    sign_up: :register,
  },
  skip: [:sessions]

  get "users/complete_registration" => "users#complete_registration", as: :complete_registration
  post "users/complete_registration" => "users#save_complete_registration", as: :save_complete_registration

  patch "users/update_table_preferences/:id" => "users#update_table_preferences", as: :update_table_preferences
  patch "users/update_user_preferences/:id" => "users#update_user_preferences", as: :update_user_preferences

  # RESOURCEFUL PATHS #

  resources :users, except: [:create]
  resources :companies, concerns: :contactable, param: :slug
  resources :ownerships

  resources :departments, concerns: :contactable, param: :slug
  resources :locations, concerns: :contactable, param: :slug

  resources :categories, param: :slug
  resources :status_types

  resources :items, path: :hardware do
    resources :nics
    concerns :categoryable, :clonable, :assignable
  end

  resources :components, concerns: [:categoryable, :assignable]
  resources :accessories, concerns: [:categoryable, :assignable]
  resources :consumables, concerns: [:categoryable, :assignable]
  resources :licenses, concerns: [:categoryable, :assignable]

  resources :assignments, except: [:index, :new]

  resources :people, concerns: :contactable

  resources :vendors, concerns: :contactable, param: :slug

  resources :models, param: :slug
  resources :manufacturers, concerns: :contactable, param: :slug
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
