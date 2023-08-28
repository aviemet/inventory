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
  end

  concern :single_unassignable do
    get "checkin", on: :member, as: :checkin
  end

  concern :quantity_unassignable do
    get "checkin/:assignment_id", action: :checkin, on: :member, as: :checkin
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

  namespace :settings do
    resources :appearance, only: [:index]
    match :appearance, to: "appearance#update", via: [:put, :patch]
    resources :asset_tags
    resources :backups
    resources :barcodes
    resources :general
    resources :integrations
    resources :ldaps, path: :ldap, except: [:show, :new, :edit]
    patch "ldaps/:id/sync" => "ldaps#sync", as: :ldap_sync
    resources :localizations
    resources :logs
    resources :notifications
    resources :smtps, path: :mail
    resources :tickets
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

  # Async route to set active company
  # TODO: Whatever uses this should opt to use /api/users/update instead
  patch "users/:id/set_active_company/:company_id" => "users#set_active_company", as: :set_active_company

  # RESOURCEFUL PATHS #

  resources :companies, concerns: :bulk_delete, param: :slug

  resources :person_groups, path: "/people/groups", param: :slug
  resources :users, concerns: :bulk_delete, except: [:create]

  resources :departments, concerns: :bulk_delete, param: :slug
  resources :locations, concerns: :bulk_delete, param: :slug

  resources :categories, concerns: :bulk_delete, param: :slug
  resources :status_labels, param: :slug

  resources :assets, path: :inventory, except: [:create, :update, :destroy], concerns: [:bulk_delete, :categoryable, :assignable, :single_unassignable]

  resources :items, path: :hardware do
    resources :nics
    concerns :bulk_delete, :categoryable, :clonable, :assignable, :single_unassignable
  end

  resources :components, concerns: [:bulk_delete, :categoryable, :assignable, :quantity_unassignable]
  resources :accessories, concerns: [:bulk_delete, :categoryable, :assignable, :quantity_unassignable]
  resources :licenses, concerns: [:bulk_delete, :categoryable, :assignable, :quantity_unassignable]
  resources :consumables, concerns: [:bulk_delete, :categoryable, :assignable]

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

  resources :contracts, concerns: :bulk_delete, param: :slug

  resources :reports, only: [:index]

  resources :tickets do
    resources :ticket_messages, path: :messages, as: :messages, only: [:create, :update, :destroy]
  end

  resources :documentations, param: :slug

  draw(:api)
end
