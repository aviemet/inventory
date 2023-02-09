if Rails.env == "development" && (Ldap.count == 0)
  Ldap.create({
    host: "10.10.20.31",
    port: 389,
    domain: "thebatterysf.com",
    username: "administrator",
    password: "temp",
    tree_base: "ou=Battery Users, dc=thebatterysf, dc=com",
    company: Company.first,
  })
end
