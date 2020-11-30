# Development data for testing with

if Rails.env == "development"

  if User.count == 0
    person = Person.new({ first_name: "Avram", middle_name: "True", last_name: "Walden", employee_number: "1000", title: "IT Manager" })
    user = User.new({ email: "aviemet@gmail.com", password: "Complex1!", confirmed_at: Date.new, person: person })
    user.add_role :super_admin

    if Company.count == 0
      company = Company.create!({ name: "Example Company" })
      user.add_role :admin, company
      person.company = company
      person.save
      user.save

      [
        { name: "San Francisco Office", company: company },
        { name: "IT Office", company: company, parent_id: 1 }
      ].each{ |location| Location.create!(location) } if Location.count == 0

      [
        { name: "IT Dept", location_id: 2, company: company },
        { name: "Engineering", location_id: 2, company: company }
      ].each{ |dept| Department.create!(dept) }
    end
  end

  if Manufacturer.count == 0 && ItemCategory.count == 0 && Model.count == 0
    ["Apple", "Lenovo", "Cisco", "HP"].each do |manufacturer| 
      Manufacturer.create!({ name: manufacturer, company: Company.first })
    end

    ["Laptops", "Desktops", "Servers", "Network Devices", "Mobile Phones", "Tablets"].each do |item_type| 
      ItemCategory.create!({ name: item_type })
    end

    [
      {
        name: "MacBook Pro",
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
    ].each{ |model| Model.create!(model) }
  end

  if Vendor.count == 0
    [
      {
        name: "Apple",
        url: "www.apple.com"
      },
      {
        name: "Amazon",
        url: "www.amazon.com"
      },
      {
        name: "CDW",
        url: "www.cdw.com"
      }
    ].each{ |vendor| Vendor.create!(vendor.merge({ company: Company.first })) }
  end

  if Item.count == 0
    100.times do
      Item.create!({
        title: Faker::Device.model_name,
        asset_tag: Faker::Blockchain::Bitcoin.unique.address,
        serial: Faker::Blockchain::Bitcoin.unique.address,
        cost: Faker::Number.decimal(l_digits: 4, r_digits: 2),
        purchased_at: Time.zone.yesterday.end_of_day,
        model: Model.first,
        vendor: Vendor.first,
        default_location: Location.first,
        item_category: ItemCategory.first,
        company: Company.first
      })
    end
  end

  # if AccessoryCategory.count == 0 && Accessory.count == 0

  # end

  if License.count == 0
    License.create!({
      name: "Microsoft Office",
      seats: Faker::Number.digit,
      key: Faker::Device.serial,
      licenser_name: Faker::Name.name,
      licenser_email: Faker::Internet.email,
      reassignable: true,
      cost: Faker::Number.decimal(l_digits: 2, r_digits: 2),
      purchased_at: Time.zone.yesterday.end_of_day,
      expires_at: Time.current.next_year,
      terminates_at: Time.current.next_year,
      license_category: LicenseCategory.first,
      vendor: Vendor.first,
      manufacturer: Manufacturer.first,
      company: Company.first
    })
  end

  if Network.count == 0
    [
      {
        name: "Normal /24",
        ip: "10.10.10.0/24",
        gateway: "10.10.10.1",
        dhcp_start: "10.10.10.150",
        dhcp_end: "10.10.10.254",
        vlan_id: 10,
        company: Company.first
      },
      {
        name: "Large /16",
        ip: "10.20.0.0/16",
        gateway: "10.20.0.1",
        dhcp_start: "10.20.1.1",
        dhcp_end: "10.20.1.254",
        vlan_id: 2,
        company: Company.first
      },
      {
        name: "Small /28",
        ip: "10.10.40.0/28",
        gateway: "10.10.40.1",
        vlan_id: 40,
        company: Company.first
      }
    ].each{ |network|  Network.create!(network) }
  end
end
