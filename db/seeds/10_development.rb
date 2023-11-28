# Development data

# Reminder: Category data is created in an after_save hook on Company::AsSetup

if Rails.env.development?

  if User.count == 0 || Company.count == 0
    company = Company::AsSetup.create!({
      name: "Example Company",
      default_currency: "USD",
    })

    if Location.count == 0
      company = Company.first

      [
        {
          name: "San Francisco Office",
          company:
        },
        {
          name: "IT Office",
          company:,
          parent_id: 1
        }
      ].each{ |location| Location.create!(location) }
    end

    if Department.count == 0
      company = Company.first

      [
        {
          name: "IT Dept",
          location: Location.first,
          company:,
        },
        {
          name: "Engineering",
          location: Location.second,
          company:,
        }
      ].each{ |dept| Department.create!(dept) }
    end

    user = User.create!({
      email: "aviemet@gmail.com",
      password: "Complex1!",
      confirmed_at: Date.new,
    })

    person = Person.create!({
      first_name: "Avram",
      middle_name: "True",
      last_name: "Walden",
      employee_number: "1000",
      job_title: "IT Manager",
      location: Location.find_by(name: "IT Office"),
      department: Department.first,
      user:,
      company:,
    })

    group = PersonGroup.create({
      name: "Company Administrator",
      description: "Full priveldges for company",
      company:
    })

    group.people << person

    user.add_role :super_admin
    person.add_role :admin, company
  end

  if Person.count == 1
    user = User.create!({
      email: "tommy@email.com",
      password: "Complex1!",
      confirmed_at: Date.new,
    })

    Person.create!({
      first_name: "Tommy",
      last_name: "Scully",
      employee_number: "1001",
      job_title: "AV Manager",
      location: Location.find_by(name: "IT Office"),
      department: Department.first,
      user:,
      company:,
    })
  end

  if Manufacturer.count == 0
    company = Company.first

    ["Apple", "Lenovo", "Cisco", "HP", "Samsung", "SHARP"].each do |manufacturer|
      Manufacturer.create!({
        name: manufacturer,
        company:,
      })
    end
  end

  if Model.count == 0
    company = Company.first

    [
      {
        name: "MacBook Pro",
        model_number: "MacBookPro16,1",
        manufacturer: Manufacturer.find_by(slug: "apple"),
        category: Category.find_by(slug: "item-laptop"),
        company:,
      },
      {
        name: "HP EliteDesk 800 G3",
        model_number: "1FY84UT#ABA",
        manufacturer: Manufacturer.find_by(slug: "hp"),
        category: Category.find_by(slug: "item-desktop"),
        company:,
      },
      {
        name: "Apple Keyboard",
        model_number: "AD897",
        manufacturer: Manufacturer.find_by(slug: "apple"),
        category: Category.find_by(slug: "accessory-keyboard"),
        company:,
      },
      {
        name: "Black Toner",
        model_number: "MX768",
        manufacturer: Manufacturer.find_by(slug: "sharp"),
        category: Category.find_by(slug: "consumable-toner"),
        company:,
      },
      {
        name: "Samsung Evo 850",
        model_number: "MZ-75E250",
        manufacturer: Manufacturer.find_by(slug: "samsung"),
        category: Category.find_by(slug: "component-ssd"),
        company:,
      }
    ].each{ |model| Model.create!(model) }
  end

  if Vendor.count == 0
    company = Company.first

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
    ].each{ |vendor| Vendor.create!(vendor.merge({ company: })) }
  end

  if Item.count == 0
    company = Company.first

    ActiveRecord::Base.transaction do
      network = IPAddress.parse("10.10.10.0/24")
      network_array = network.to_a

      105.times do |n|
        serial = Faker::Alphanumeric.alphanumeric(number: 8, min_alpha: 3, min_numeric: 3).upcase
        i = Item.create!({
          name: Faker::Device.model_name,
          asset_tag: serial,
          serial:,
          cost: Faker::Number.decimal(l_digits: 4, r_digits: 2),
          purchased_at: Time.zone.yesterday.end_of_day,
          model: Model.find(Model.where('id <= ?', 2).pluck(:id).sample),
          vendor: Vendor.find(Vendor.pluck(:id).sample),
          default_location: Location.find(Location.pluck(:id).sample),
          status_label: StatusLabel.first,
          company:,
          nics: [Nic.new({
            nic_type: :ethernet,
            mac: Faker::Internet.unique.mac_address
          })]
        })

        next unless n.odd?

        if n < 80
          ip = network_array[n]
          ip.prefix = 32
        else
          ip = Faker::Internet.unique.private_ip_v4_address
        end

        i.nics.first.ip_leases << IpLease.new({
          address: ip,
        })
      end
    end
  end

  if Contract.count == 0
    company = Company.first

    vendor = Vendor.create!({
      name: "Unwired",
      url: "www.unwired.com",
      company:,
    })

    Contract.create!({
      name: "Primary internet service",
      number: Faker::Alphanumeric.alphanumeric(number: 6, min_alpha: 2, min_numeric: 2).upcase,
      begins_at: 6.months.ago,
      ends_at: 6.months.from_now,
      vendor:,
      category: Category.where({name: "Utility"}).first,
      company:,
    })
  end

  if License.count == 0
    company = Company.first

    License.create!({
      name: "Microsoft Office",
      qty: 5,
      key: Faker::Device.serial,
      licenser_name: Faker::Name.name,
      licenser_email: Faker::Internet.email,
      reassignable: true,
      cost: Faker::Number.decimal(l_digits: 2, r_digits: 2),
      purchased_at: Time.zone.yesterday.end_of_day,
      expires_at: Time.current.next_year,
      terminates_at: Time.current.next_year,
      category: Category.find_by(slug: "license-operating-system"),
      vendor: Vendor.first,
      manufacturer: Manufacturer.first,
      status_label: StatusLabel.first,
      company:,
    })
  end

  if Accessory.count == 0
    company = Company.first

    Accessory.create!({
      name: "Apple Keyboard",
      serial: Faker::Device.serial,
      cost: 80,
      qty: 10,
      min_qty: 1,
      requestable: true,
      model: Model.find(3),
      vendor: Vendor.find_by(slug: "apple"),
      default_location: Location.first,
      status_label: StatusLabel.first,
      company:,
    })
  end

  if Consumable.count == 0
    company = Company.first

    Consumable.create!({
      name: "Black Toner",
      qty: 3,
      min_qty: 2,
      cost: nil,
      requestable: true,
      model: Model.find(4),
      vendor: Vendor.find_by(slug: "sharp"),
      default_location: Location.first,
      company:,
    })
  end

  if Component.count == 0
    company = Company.first

    Component.create!({
      name: "Samsung Evo 850",
      qty: 3,
      min_qty: 2,
      cost: nil,
      model: Model.find(5),
      vendor: Vendor.find_by(slug: "amazon"),
      default_location: Location.first,
      status_label: StatusLabel.first,
      company: Company.first,
    })
  end

  if Assignment.count == 0
    Item.first.assign_to Person.first
    Item.second.assign_to Location.first
    Item.third.assign_to Item.fourth
    Accessory.first.assign_to Item.second
    Component.first.assign_to Item.third
    Consumable.first.assign_to Person.first
  end

  if Ticket.count == 0
    company = Company.first

    ticket = Ticket.create({
      subject: "Support request",
      created_by: Person.second,
      primary_contact: Person.second,
      company:,
    })
    ticket.assignees << Person.first
    ticket.messages << TicketMessage.new({
      body: "<p>Message regarding this ticket</p>",
      created_by: Person.first,
    })
  end

  if Network.count == 0
    company = Company.first

    [
      {
        name: "Normal /24",
        address: "10.10.10.0/24",
        gateway: "10.10.10.1",
        dhcp_start: "10.10.10.150",
        dhcp_end: "10.10.10.254",
        vlan_id: 10,
        company:,
      },
      {
        name: "Large /16",
        address: "10.20.0.0/16",
        gateway: "10.20.0.1",
        dhcp_start: "10.20.1.1",
        dhcp_end: "10.20.1.254",
        vlan_id: 2,
        company:,
      },
      {
        name: "Small /28",
        address: "10.10.40.0/28",
        gateway: "10.10.40.1",
        vlan_id: 40,
        company:,
      }
    ].each{ |network| Network.create!(network) }
  end

  if Smtp.count == 0
    Smtp.create({
      name: "GMail",
      host: "smtp.gmail.com",
      port: 587,
      security: :tls,
      username: "temporary@gmail.com",
      password: "Complex1!",
      domain: "thebatterysf.com",
      company: Company.first,
    })
  end

end
