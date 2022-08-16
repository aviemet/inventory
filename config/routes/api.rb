namespace :api do
  resources :users, only: [:create, :update]
  resources :companies, only: [:create, :update]
  resources :ownerships, only: [:create, :update]

  resources :departments, only: [:create, :update]
  resources :locations, only: [:create, :update]

  resources :categories, only: [:create, :update]
  resources :status_types, only: [:create, :update]

  resources :items, path: :hardware, only: [:create, :update] do
    resources :nics, only: [:create, :update]
  end

  resources :components, only: [:create, :update]
  resources :accessories, only: [:create, :update]
  resources :consumables, only: [:create, :update]
  resources :licenses, only: [:create, :update]

  resources :assignments, only: [:create, :update]

  resources :people, only: [:create, :update]

  resources :vendors, only: [:create, :update]

  resources :models, only: [:create, :update]
  resources :manufacturers, only: [:create, :update]
  resources :warranties, only: [:create, :update]

  resources :fields, only: [:create, :update]
  resources :fieldsets, only: [:create, :update]
  resources :fieldset_associations, only: [:create, :update]

  resources :ip_leases, only: [:create, :update]
  resources :networks, only: [:create, :update]

  resources :orders, only: [:create, :update]
  resources :purchases, only: [:create, :update]

  resources :contracts, only: [:create, :update]
end
