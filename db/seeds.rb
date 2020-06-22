# Base status types
["Deployable", "Undeployable", "Pending", "Archived"].each{ |status| StatusType.create({ name: status }) } if StatusType.count == 0

# Base contact types
["Work", "Personal"].each{ |type| EmailType.create({ name: type }) } if EmailType.count == 0

["Home", "Mobile" ,"Office"].each{ |type| PhoneType.create({ name: type }) } if PhoneType.count == 0

["Home", "Company", "Billing"].each{ |type| AddressType.create({ name: type }) } if AddressType.count == 0

# Development data for testing with
if Rails.env == "development"

  person = Person.new({ first_name: "Avram", middle_name: "True", last_name: "Walden", employee_number: "1000", title: "IT Manager" })
  User.create!({ email: "aviemet@gmail.com", password: "Complex1!", confirmed_at: Date.new, person: person }) if User.count == 0

  if Company.count == 0
    company = Company.create({ name: "Example Company" })
    User.first.add_role :admin, company
    person.company = company
    person.save

    [
      { name: "San Francisco Office", company: c },
      { name: "IT Office", company: c, parent_id: 1 }
    ].each{ |location| Location.create(location) } if Location.count == 0

    Department.create({ name: "IT Dept", location_id: 2, company: c }) if Department.count == 0
  end

  if Manufacturer.count == 0 && ItemCategory.count == 0 && Model.count == 0
    [
      { name: "Apple" },
      { name: "Lenovo" },
      { name: "Cisco" },
      { name: "HP" }
    ].each{ |manufacturer| Manufacturer.create(manufacturer) }

    [
      { name: "Laptops" },
      { name: "Desktops" },
      { name: "Network Devices" },
      { name: "Mobile Phones" },
      { name: "Tablets" }
    ].each{ |item_type| ItemCategory.create(item_type) }

    [
      {
        name: "Macbook Pro",
        model_number: "MacBookPro16,1",
        manufacturer: Manufacturer.find_by_name(:Apple),
        item_category: ItemCategory.find_by_name(:Laptops)
      },
      {
        name: "HP EliteDesk 800 G3",
        model_number: "1FY84UT#ABA",
        manufacturer: Manufacturer.find_by_name(:HP),
        item_category: ItemCategory.find_by_name(:Laptops)
      }
    ].each{ |model| Model.create(model) }
  end

end
