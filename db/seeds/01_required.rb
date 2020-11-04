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

if LicenseCategory.count == 0
  ["Office Software", "Graphics Software"].each do |category|
    LicenseCategory.create({ name: category })
  end
end
