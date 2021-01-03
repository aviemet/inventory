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

  resources :ownerships

  resources :status_types

  resources :companies, concerns: :contactable

  resources :departments, concerns: :contactable
  resources :locations, concerns: :contactable

  resources :items do
    resources :nics
    get "category/:category_id", to: "items#category", on: :collection
  end

  resources :accessories
  resources :consumables

  resources :categories

  # Use /checkout as a verb in the url to define asset assigments
  custom_path_actions = [:index, :create, :new]
  resources :assignments, except: custom_path_actions
  resources :assignments, path: "assignments/:asset_type/:asset_id", only: custom_path_actions



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


  scope "/partials" do
    scope "/dropdown" do
      get "/:model/(:company_id)", to: "partials#dropdown", format: false
    end
  end
end
