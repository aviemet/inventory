class LdapSerializer < ApplicationSerializer
  attributes :name,
             :host,
             :port,
             :domain,
             :username,
             :password,
             :tree_base,
             :user_search,
             :sync_interval,
             :created_at,
             :updated_at

  # view :associations do
  #   association :company, serializer: CompanySerializer
  # end

end
