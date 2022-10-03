Rails.application.routes.draw do
  # CONCERNS #

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

  concern :bulk_delete do
    collection do
      delete :destroy
    end
  end

  # ROOT PATH #

  root "pages#dashboard"
  
  # STATIC PAGES #

  get "dashboard" => "pages#dashboard", as: :dashboard

  # SETTINGS PAGES #

  get "settings" => "settings#index", as: :settings
  scope :settings do
    resources :ldaps
    patch "ldaps/:id/sync" => "ldaps#sync", as: :ldap_sync
  end

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

  patch "users/:id/set_active_company/:company_id" => "users#set_acttive_company", as: :set_active_company

  # RESOURCEFUL PATHS #

  resources :users, concerns: :bulk_delete, except: [:create]
  resources :companies, concerns: :bulk_delete, param: :slug
  resources :ownerships

  resources :departments, concerns: :bulk_delete, param: :slug
  resources :locations, concerns: :bulk_delete, param: :slug

  resources :categories, concerns: :bulk_delete, param: :slug
  resources :status_types

  resources :items, path: :hardware do
    resources :nics
    concerns :bulk_delete, :categoryable, :clonable, :assignable
  end

  resources :components, concerns: [:bulk_delete, :categoryable, :assignable]
  resources :accessories, concerns: [:bulk_delete, :categoryable, :assignable]
  resources :consumables, concerns: [:bulk_delete, :categoryable, :assignable]
  resources :licenses, concerns: [:bulk_delete, :categoryable, :assignable]

  resources :assignments, except: [:index, :new]
  patch "assignments/:id/unassign" => "assignments#unassign", as: :unassign_assignment

  resources :people, concerns: :bulk_delete

  resources :vendors, concerns: :bulk_delete, param: :slug

  resources :models, concerns: :bulk_delete, param: :slug
  resources :manufacturers, concerns: :bulk_delete, param: :slug
  resources :warranties, concerns: :bulk_delete

  resources :fields
  resources :fieldsets
  resources :fieldset_associations

  resources :ip_leases
  resources :networks, concerns: :bulk_delete

  resources :orders, concerns: :bulk_delete
  resources :purchases, concerns: :bulk_delete

  resources :contracts, concerns: :bulk_delete

  resources :reports, only: [:index]

  draw(:api)
end
