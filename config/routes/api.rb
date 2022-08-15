namespace :api do
  resources :users, only: [:update]
  resources :companies, only: [:update]
  resources :ownerships, only: [:update]

  resources :departments, only: [:update]
  resources :locations, only: [:update]

  resources :categories, only: [:update]
  resources :status_types, only: [:update]

  resources :items, path: :hardware do
    resources :nics, only: [:update]
  end

  resources :components, only: [:update]
  resources :accessories, only: [:update]
  resources :consumables, only: [:update]
  resources :licenses, only: [:update]

  resources :assignments, only: [:update]

  resources :people, only: [:update]

  resources :vendors, only: [:update]

  resources :models, only: [:update]
  resources :manufacturers, only: [:update]
  resources :warranties, only: [:update]

  resources :fields, only: [:update]
  resources :fieldsets, only: [:update]
  resources :fieldset_associations, only: [:update]

  resources :ip_leases, only: [:update]
  resources :networks, only: [:update]

  resources :orders, only: [:update]
  resources :purchases, only: [:update]

  resources :contracts, only: [:update]
end
