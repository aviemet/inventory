Rails.application.routes.draw do
  resources :item_categories
  resources :items
  resources :orders
  resources :purchases
  resources :network_interfaces
  resources :items_assignments
  root to: "assets#index"

  devise_for :users

  resources :ownerships
  resources :user_companies
  resources :roles
  resources :interfaces_ipv6s
  resources :interfaces_ipv4s
  resources :ipv6_addresses
  resources :ipv4_addresses
  resources :networks
  resources :contracts
  resources :vendors
  resources :people
  resources :locations
  resources :phones
  resources :emails
  resources :departments
  resources :addresses
  resources :contacts
  resources :contract_types
  resources :contact_types
  resources :companies
  resources :brands

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
