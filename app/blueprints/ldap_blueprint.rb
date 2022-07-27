class LdapBlueprint < ApplicationBlueprint
  fields :host,
         :port,
         :domain,
         :username,
         :password,
         :tree_base,
         :user_search,
         :sync_interval,
         :created_at,
         :updated_at

  association :company, blueprint: CompanyBlueprint

  view :new do
    field :id
    excludes :created_at, :updated_at
  end
end
