Rails.application.routes.draw do
  root to: "items#index"

  get "pages/:page" => "pages#show"

  devise_for :users

  resources :ownerships

  resources :companies do
    resources :departments, shallow: true
    resources :locations, shallow: true
  end

  resources :phone_types
  resources :email_types
  resources :address_types

  resources :contract_types

  resources :item_categories
  resources :accessory_categories
  resources :consumable_categories

  resources :status_types

  scope "/:company" do
    resources :people do
      resources :contacts
    end
    
    resources :items do
      resources :nics
    end

    resources :accessories
    resources :consumables

    # Use /checkout as a verb in the url to define asset assigments
    scope :checkout do
      resources :assignments, path: ":asset_type/:asset_id"
    end

    resources :models
    resources :manufacturers
    resources :licenses
    resources :warranties

    resources :fields
    resources :fieldsets
    resources :fieldset_associations

    resources :ips
    resources :nics_ips
    resources :networks

    resources :orders
    resources :purchases

    resources :contracts
    resources :vendors

    resources :custom_fieldset_associations
  end

  scope "/partials" do
    scope "/dropdown" do
      get "/", to: "partials#show", format: false
      get "/company", to: "partials#company_dropdown", format: false
      get "/:company_id/:model", to: "partials#dropdown", format: false
    end
  end
end
