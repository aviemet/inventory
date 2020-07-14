Rails.application.routes.draw do
  root to: "items#index"

  get "pages/:page" => "pages#show"

  devise_for :users

  resources :people
  resources :contacts
  resources :phones
  resources :phone_types
  resources :emails
  resources :email_types
  resources :address_types
  resources :addresses
  resources :websites

  resources :ownerships

  resources :user_companies
  resources :companies do
    resources :departments, except: [:index], shallow: true
    resources :locations, except: [:index], shallow: true
  end

  resources :items
  resources :accessories
  resources :consumables
  get "checkout/:asset_type/:asset_id" => "assignments#checkout", as: :checkout
  # post "checkout/:asset_type/:asset_id" => "assignments#"
  resources :item_categories
  resources :accessory_categories
  resources :consumable_categories
  resources :models
  resources :manufacturers
  resources :licenses
  resources :warranties
  resources :assignments
  resources :status_types

  resources :fields
  resources :fieldsets
  resources :fieldset_associations

  resources :nics
  resources :nics_ips
  resources :ips
  resources :networks

  resources :orders
  resources :purchases

  resources :contracts
  resources :contract_types
  resources :vendors

  resources :custom_fieldset_associations
end
