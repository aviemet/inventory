Rails.application.routes.draw do
  resources :address_types
  resources :phone_types
  resources :email_types
  resources :status_types
  root to: "items#index"

  get "pages/:page" => "pages#show"

  devise_for :users

  resources :people
  resources :contacts
  resources :phones
  resources :emails
  resources :addresses
  resources :websites

  resources :roles
  resources :ownerships

  resources :user_companies
  resources :companies do
    resources :departments, :locations
  end

  resources :items
  resources :accessories, controller: :items
  resources :consumeables, controller: :items
  resources :item_categories
  resources :items_assignments
  resources :models
  resources :manufacturers
  resources :licenses
  resources :warranties

  resources :network_interfaces
  resources :interfaces_ipv4s
  resources :interfaces_ipv6s
  resources :ipv4_addresses
  resources :ipv6_addresses
  resources :networks

  resources :orders
  resources :purchases

  resources :contracts
  resources :contract_types
  resources :vendors

  resources :custom_fieldset_associations
  resources :custom_fields
  resources :custom_fieldsets

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
