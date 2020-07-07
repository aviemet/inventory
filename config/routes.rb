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
    resources :departments, :locations
  end

  resources :items
  resources :accessories
  resources :consumables
  resources :accessory_categories
  resources :item_categories
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

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
