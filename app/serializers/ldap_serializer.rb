class LdapSerializer < ApplicationSerializer
  object_as :ldap

  attributes(
    :name,
    :host,
    :port,
    :domain,
    :username,
    :password,
    :tree_base,
    :user_search,
    :sync_interval,
    :created_at,
    :updated_at,
  )
end
