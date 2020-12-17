# Development data for testing with

if Rails.env == "development"

  if User.count == 0 || Company.count == 0
    person = Person.new({
      first_name: "Avram",
      middle_name: "True",
      last_name: "Walden",
      employee_number: "1000",
      job_title: "IT Manager"
    })
    user = User.new({
      email: "aviemet@gmail.com",
      password: "Complex1!",
      confirmed_at: Date.new,
      person: person
    })
    user.add_role :super_admin

    company = Company.create!({
      name: "Example Company"
    })
    user.add_role :admin, company
    person.company = company
    person.save
    user.save
  end

  if Location.count == 0
    [
      {
        name: "San Francisco Office",
        company: Company.first
      },
      {
        name: "IT Office",
        company: Company.first,
        parent_id: 1
      }
    ].each{ |location| Location.create!(location) } if Location.count == 0
  end

  if Department.count == 0
    [
      {
        name: "IT Dept",
        location: Location.first,
        company: Company.first
      },
      { 
        name: "Engineering",
        location: Location.second,
        company: Company.first
      }
    ].each{ |dept| Department.create!(dept) }
  end

  if Manufacturer.count == 0
    ["Apple", "Lenovo", "Cisco", "HP", "SHARP"].each do |manufacturer|
      Manufacturer.create!({
        name: manufacturer,
        company: Company.first
      })
    end
  end

  if Model.count == 0
    [
      {
        name: "MacBook Pro",
        model_number: "MacBookPro16,1",
        manufacturer: Manufacturer.find_by_slug("apple"),
        category: Category.find_by_slug("item-laptop")
      },
      {
        name: "HP EliteDesk 800 G3",
        model_number: "1FY84UT#ABA",
        manufacturer: Manufacturer.find_by_slug("hp"),
        category: Category.find_by_slug("item-desktop")
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
      },
      {
        name: "SHARP",
        url: "www.business.sharp.com"
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
        company: Company.first
      })
    end
  end

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
      category: Category.find_by_slug("license-operating-system"),
      vendor: Vendor.first,
      manufacturer: Manufacturer.first,
      company: Company.first
    })
  end

  if Accessory.count == 0
    Accessory.create!({
      name: "Apple Keyboard",
      serial: Faker::Device.serial,
      model_number: "AD897",
      cost: 80,
      qty: 10,
      min_qty: 1,
      requestable: true,
      category: Category.find_by_slug("accessory-keyboard"),
      manufacturer: Manufacturer.find_by_slug("apple"),
      vendor: Vendor.find_by_slug("apple"),
      default_location: Location.first,
      company: Company.first
    })
  end

  if Consumable.count == 0
    Consumable.create!({
      name: "Black Toner",
      model_number: "MX768",
      qty: 3,
      min_qty: 2,
      cost: nil,
      requestable: true,
      category: Category.find_by_slug("consumable-toner"),
      manufacturer: Manufacturer.find_by_slug("sharp"),
      vendor: Vendor.find_by_slug("sharp"),
      default_location: Location.first,
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
