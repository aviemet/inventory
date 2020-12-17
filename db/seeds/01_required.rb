# Base status types
if StatusType.count == 0
  ["Deployable", "Undeployable", "Pending", "Archived"].each do |status|
    StatusType.create({
      name: status
    })
  end
end

if Category.count == 0
  {
    Item: ["Desktop", "Laptop", "Server"],
    Accessory: ["Keyboard", "Mouse"],
    Consumable: ["Toner", "Paper"],
    License: ["Operating System", "Office Software"],
    Email: ["Work", "Personal"],
    Address: ["Work", "Personal"],
    Phone: ["Home", "Mobile", "Office"],
    Contract: ["Utility", "Leasing", "SLA"]
  }.each do |type, categories|
    categories.each do |category|
      Category.create!({
        name: category,
        categorizable_type: type
      })
    end
  end
end
