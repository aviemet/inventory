# Base status types
[
  { name: "Deployable" },
  { name: "Undeployable" },
  { name: "Pending" },
  { name: "Archived" }
].each{ |status| StatusType.create(status) } if StatusType.count == 0

# Development data for testing with
if Rails.env == "development"

  User.create({ email: "aviemet@gmail.com", password: "easytoremember", confirmed_at: Date.new }) if User.count == 0

  if Company.count == 0
    c = Company.create({ name: "Example Company" }) if Company.count == 0
    User.first.add_role :admin, c

    [
      { name: "San Francisco Office", company: c },
      { name: "IT Office", company: c, parent_id: 1 }
    ].each{ |location| Location.create(location) } if Location.count == 0

    Department.create({ name: "IT Dept", location_id: 2, company: c }) if Department.count == 0
  end

end
