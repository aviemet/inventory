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

  # devise_for :users, path: "/", path_names: { sign_in: "login", sign_out: "logout" }, only: [:sessions]
  # devise_for :users, path_names: { sign_up: "register" }, skip: [:sessions]

  # RESOURCEFUL PATHS #

  resources :users, except: [:create]
  resources :companies, concerns: :contactable
  resources :ownerships

  resources :departments, concerns: :contactable
  resources :locations, concerns: :contactable

  resources :categories
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

  resources :vendors, param: :slug, concerns: :contactable

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
