# Development data for testing with

if Rails.env == "production"

  if User.count == 0 || Company.count == 0
    person = Person.new({
      first_name: "IT",
      last_name: "Manager",
      employee_number: "1000",
      job_title: "IT Manager",
    })
    user = User.new({
      email: "demo@company.com",
      password: "Complex1!",
      confirmed_at: Date.new,
      person: person,
    })
    user.add_role :super_admin

    company = Company.create!({
      name: "Example Company",
    })

    user.add_role :admin, company
    person.company = company
    person.save
    user.save
  end

  company = Company.first

  if Location.count == 0
    [
      {
        name: "San Francisco Office",
        company: company
      },
      {
        name: "IT Office",
        company: company,
        parent_id: 1
      },
      {
        name: "Engineering",
        company: company,
        parent_id: 1
      },
      {
        name: "Front Desk",
        company: company,
        parent_id: 1
      }
    ].each{ |location| Location.create!(location) }
  end

  if Department.count == 0
    [
      {
        name: "IT Dept",
        location: Location.second,
        company: company,
      },
      { 
        name: "Engineering",
        location: Location.third,
        company: company,
      },
      { 
        name: "Front Desk",
        location: Location.find(4),
        company: company,
      }
    ].each{ |dept| Department.create!(dept) }
  end

  if Category.count == 0
    {
      Item: ["Desktop", "Laptop", "Server"],
      Accessory: ["Keyboard", "Mouse"],
      Consumable: ["Toner", "Paper"],
      Component: ["Memory", "SSD", "HDD"],
      License: ["Operating System", "Office Software"],
      Email: ["Work", "Personal"],
      Address: ["Work", "Personal"],
      Phone: ["Home", "Mobile", "Office"],
      Contract: ["Utility", "Leasing", "SLA"]
    }.each do |type, categories|
      categories.each do |category|
        Category.create!({
          name: category,
          categorizable_type: type,
          company: company,
        })
      end
    end
  end  

  if Manufacturer.count == 0
    ["Apple", "Lenovo", "Cisco", "HP", "Samsung", "SHARP"].each do |manufacturer|
      Manufacturer.create!({
        name: manufacturer,
        company: company,
      })
    end
  end

  if Model.count == 0
    [
      {
        name: "MacBook Pro",
        model_number: "MacBookPro16,1",
        manufacturer: Manufacturer.find_by_slug("apple"),
        category: Category.find_by_slug("item-laptop"),
        company: company,
      },
      {
        name: "HP EliteDesk 800 G3",
        model_number: "1FY84UT#ABA",
        manufacturer: Manufacturer.find_by_slug("hp"),
        category: Category.find_by_slug("item-desktop"),
        company: company,
      },
      {
        name: "Apple Keyboard",
        model_number: "AD897",
        manufacturer: Manufacturer.find_by_slug("apple"),
        category: Category.find_by_slug("accessory-keyboard"),
        company: company,
      },
      {
        name: "Black Toner",
        model_number: "MX768",
        manufacturer: Manufacturer.find_by_slug("sharp"),
        category: Category.find_by_slug("consumable-toner"),
        company: company,
      },
      {
        name: "Samsung Evo 850",
        model_number: "MZ-75E250",
        manufacturer: Manufacturer.find_by_slug("samsung"),
        category: Category.find_by_slug("component-ssd"),
        company: company,
      }
    ].each{ |model| Model.create!(model) }
  end

  if Vendor.count == 0
    [
      {
        name: "Apple",
        url: "www.apple.com",
      },
      {
        name: "Amazon",
        url: "www.amazon.com",
      },
      {
        name: "CDW",
        url: "www.cdw.com",
      },
      {
        name: "SHARP",
        url: "www.business.sharp.com",
      },
    ].each{ |vendor| Vendor.create!(vendor.merge({ company: company })) }
  end

  if Item.count == 0
    ActiveRecord::Base.transaction do
      network = IPAddress.parse("10.10.10.0/24")

      105.times do |n|
        serial = Faker::Alphanumeric.alphanumeric(number: 8, min_alpha: 3, min_numeric: 3).upcase
        i = Item.create!({
          name: Faker::Device.model_name,
          asset_tag: serial,
          serial: serial,
          cost: Faker::Number.decimal(l_digits: 4, r_digits: 2),
          purchased_at: Time.zone.yesterday.end_of_day,
          model: Model.find(Model.where('id <= ?', 2).pluck(:id).sample),
          vendor: Vendor.find(Vendor.pluck(:id).sample),
          default_location: Location.find(Location.pluck(:id).sample),
          company: company,
          nics: [ Nic.new({
            nic_type: :ethernet,
            mac: Faker::Internet.unique.mac_address
          }) ]
        })

        if n % 2 != 0
          i.nics.first.ip_leases << IpLease.new({
            address: n < 80 ? network.to_a[n] : Faker::Internet.unique.private_ip_v4_address,
          })
        end
      end
    end
  end

  if Contract.count == 0
    vendor = Vendor.create!({
      name: "Unwired",
      url: "www.unwired.com",
      company: company,
    })

    Contract.create!({
      name: "Primary internet service",
      number: Faker::Alphanumeric.alphanumeric(number: 6, min_alpha: 2, min_numeric: 2).upcase,
      begins_at: 6.months.ago,
      ends_at: 6.months.from_now,
      vendor: vendor,
      category: Category.where({name: "Utility"}).first,
      company: company,
    })
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
      company: company,
    })
  end

  if Accessory.count == 0
    Accessory.create!({
      name: "Apple Keyboard",
      serial: Faker::Device.serial,
      cost: 80,
      qty: 10,
      min_qty: 1,
      requestable: true,
      model: Model.find(3),
      vendor: Vendor.find_by_slug("apple"),
      default_location: Location.first,
      company: company,
    })
  end

  if Consumable.count == 0
    Consumable.create!({
      name: "Black Toner",
      qty: 3,
      min_qty: 2,
      cost: nil,
      requestable: true,
      model: Model.find(4),
      vendor: Vendor.find_by_slug("sharp"),
      default_location: Location.first,
      company: company,
    })
  end

  if Component.count == 0
    Component.create!({
      name: "Samsung Evo 850",
      qty: 3,
      min_qty: 2,
      cost: nil,
      model: Model.find(5),
      vendor: Vendor.find_by_slug("amazon"),
      default_location: Location.first,
      company: company,
    })
  end

  if Network.count == 0
    [
      {
        name: "Normal /24",
        address: "10.10.10.0/24",
        gateway: "10.10.10.1",
        dhcp_start: "10.10.10.150",
        dhcp_end: "10.10.10.254",
        vlan_id: 10,
        company: company,
      },
      {
        name: "Large /16",
        address: "10.20.0.0/16",
        gateway: "10.20.0.1",
        dhcp_start: "10.20.1.1",
        dhcp_end: "10.20.1.254",
        vlan_id: 2,
        company: company,
      },
      {
        name: "Small /28",
        address: "10.10.40.0/28",
        gateway: "10.10.40.1",
        vlan_id: 40,
        company: company,
      }
    ].each{ |network|  Network.create!(network) }
  end

  if Ldap.count == 0
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
end
