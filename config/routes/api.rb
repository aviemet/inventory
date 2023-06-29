namespace :api do
  resources :users, only: [:create, :update]
  patch "users/:id/update_table_preferences" => "users#update_table_preferences", as: :update_table_preferences
  patch "users/:id/update_user_preferences" => "users#update_user_preferences", as: :update_user_preferences

  resources :companies, only: [:create, :update], param: :slug
  resources :ownerships, only: [:create, :update]

  resources :departments, only: [:create, :update], param: :slug
  resources :locations, only: [:create, :update], param: :slug

  resources :categories, except: [:edit, :new], param: :slug
  resources :status_labels, only: [:create, :update]

  resources :items, path: :hardware, except: [:edit, :new, :create] do
    resources :nics, only: [:create, :update]
  end

  resources :components, only: [:update]
  resources :accessories, only: [:update]
  resources :consumables, only: [:update]
  resources :licenses, only: [:update]

  resources :assignments, only: [:create, :update]

  resources :people, except: [:edit, :new, :create]

  resources :vendors, except: [:edit, :new], param: :slug

  resources :models, except: [:edit, :new], param: :slug

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

  resources :documentations, only: [:index, :show]

  resources :searches, only: [:index]
  resources :spotlights, only: [:index]

  resources :currencies, only: [:index]

  scope :options do
    [:companies, :departments, :locations, :categories, :status_labels, :assets, :items, :components, :accessories, :consumables, :licenses, :people, :vendors, :models, :manufacturers, :networks, :orders, :contracts, :documentations].each do |model|
      get model.to_s => "#{model}#options", as: "#{model}_options"
    end
  end

  ## SETTINGS ##
  post "smtp/test" => "smtps#test", as: :smtp_test
end
