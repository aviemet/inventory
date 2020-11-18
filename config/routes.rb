Rails.application.routes.draw do
  root to: "pages#home"

  concern :contactable do
    resources :contacts, except: [:index]
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
  scope :checkout do
    resources :assignments, path: ":asset_type/:asset_id"
  end

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
      get "/", to: "partials#show", format: false
      get "/:model/(:company_id)", to: "partials#dropdown", format: false
    end
  end
end
