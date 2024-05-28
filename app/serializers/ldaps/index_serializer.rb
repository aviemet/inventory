class Ldaps::IndexSerializer < LdapSerializer
  attributes(
    :id,
    :name,
    :created_at,
    :updated_at,
  )
end
