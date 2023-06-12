namespace :api do
  resources :users, only: [:create, :update]
  resources :companies, only: [:create, :update], param: :slug
  resources :ownerships, only: [:create, :update]

  resources :departments, only: [:create, :update], param: :slug
  resources :locations, only: [:create, :update], param: :slug

  resources :categories, only: [:create, :update], param: :slug
  resources :status_labels, only: [:create, :update]

  resources :items, path: :hardware, only: [:index, :update] do
    resources :nics, only: [:create, :update]
  end

  resources :components, only: [:update]
  resources :accessories, only: [:update]
  resources :consumables, only: [:update]
  resources :licenses, only: [:update]

  resources :assignments, only: [:create, :update]

  resources :people, only: [:update]

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

  resources :documentations, only: [:index]

  resources :searches, only: [:index]
  resources :spotlights, only: [:index]

  ## SETTINGS ##
  post "smtp/test" => "smtps#test", as: :smtp_test
end
