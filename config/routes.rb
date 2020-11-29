Rails.application.routes.draw do
  resources :ip_leases
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

  devise_for :users, path: '/', path_names: { sign_in: 'login', sign_out: 'logout' }, only: [:sessions]
  devise_for :users, path_names: { sign_up: 'register' }, skip: [:sessions]

  resources :ownerships

  resources :phone_types
  resources :email_types
  resources :address_types

  resources :contract_types

  resources :item_categories
  resources :accessory_categories
  resources :consumable_categories

  resources :status_types

  resources :companies, concerns: :contactable


  resources :departments, concerns: :contactable
  resources :locations, concerns: :contactable

  resources :items do
    resources :nics
  end

  resources :accessories
  resources :consumables

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

  resources :ips
  resources :nics_ips
  resources :networks

  resources :orders
  resources :purchases

  resources :contracts

  resources :custom_fieldset_associations

  scope "/partials" do
    scope "/dropdown" do
      get "/:model/(:company_id)", to: "partials#dropdown", format: false
    end
  end
end
