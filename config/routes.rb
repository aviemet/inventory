Rails.application.routes.draw do
  root to: "items#index"

  devise_for :users

  resources :people
  resources :contacts
  resources :contact_types
  resources :phones
  resources :emails
  resources :addresses

  resources :roles
  resources :ownerships
  
  resources :companies
  resources :departments
  resources :locations
  resources :user_companies
  
  resources :items
  resources :item_categories
  resources :items_assignments
  resources :brands
  
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

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
