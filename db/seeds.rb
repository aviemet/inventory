# Base status types
if StatusType.count == 0
  ["Deployable", "Undeployable", "Pending", "Archived"].each do |status| 
    StatusType.create({ name: status })
  end
end

# Base contact types
if EmailType.count == 0
  ["Work", "Personal"].each do |type|
    EmailType.create({ name: type })
  end
end

if PhoneType.count == 0
  ["Home", "Mobile", "Office"].each do |type|
    PhoneType.create({ name: type })
  end
end

if AddressType.count == 0
  ["Home", "Company", "Billing"].each do |type| 
    AddressType.create({ name: type })
  end
end

# Development data for testing with
if Rails.env == "development"

  if User.count == 0
    person = Person.new({ first_name: "Avram", middle_name: "True", last_name: "Walden", employee_number: "1000", title: "IT Manager" })
    User.create!({ email: "aviemet@gmail.com", password: "Complex1!", confirmed_at: Date.new, person: person })
  end

  if Company.count == 0
    company = Company.create({ name: "Example Company" })
    User.first.add_role :admin, company
    person.company = company
    person.save

    [
      { name: "San Francisco Office", company: company },
      { name: "IT Office", company: company, parent_id: 1 }
    ].each{ |location| Location.create(location) } if Location.count == 0

    Department.create({ name: "IT Dept", location_id: 2, company: c }) if Department.count == 0
  end

  if Manufacturer.count == 0 && ItemCategory.count == 0 && Model.count == 0
    ["Apple", "Lenovo", "Cisco", "HP"].each do |manufacturer| 
      Manufacturer.create({ name: manufacturer })
    end

    ["Laptops", "Desktops", "Network Devices", "Mobile Phones", "Tablets"].each do |item_type| 
      ItemCategory.create({ name: item_type })
    end

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
