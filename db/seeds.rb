# Insert the user roles for authorization
[:USER, :MANAGER, :ADMIN, :OWNER].each_with_index { |role, i| Role.create(name: role, level: i) }