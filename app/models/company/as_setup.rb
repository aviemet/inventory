class Company::AsSetup < Company
  after_create :seed_categories

  def seed_categories
    {
      Item: ["Desktop", "Laptop", "Server"],
      Accessory: ["Keyboard", "Mouse", "Monitor"],
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
          company: self,
        })
      end
    end
  end

end
