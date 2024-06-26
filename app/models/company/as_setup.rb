# == Schema Information
#
# Table name: companies
#
#  id               :bigint           not null, primary key
#  default_currency :string           not null
#  name             :string           not null
#  settings         :jsonb
#  slug             :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  app_smtp_id      :bigint
#  tickets_smtp_id  :bigint
#
# Indexes
#
#  index_companies_on_app_smtp_id      (app_smtp_id)
#  index_companies_on_settings         (settings) USING gin
#  index_companies_on_slug             (slug) UNIQUE
#  index_companies_on_tickets_smtp_id  (tickets_smtp_id)
#
# Foreign Keys
#
#  fk_rails_...  (app_smtp_id => smtps.id)
#  fk_rails_...  (tickets_smtp_id => smtps.id)
#
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
      Contract: ["Utility", "Leasing", "SLA"],
      Documentation: ["Instructions", "Repair"]
    }.each do |type, categories|
      categories.each do |category|
        Category.create!({
          name: category,
          categorizable_type: type,
          company: self,
        })
      end

      Category.create!({
        name: "Other",
        categorizable_type: type,
        company: self,
      })
    end
  end

end
