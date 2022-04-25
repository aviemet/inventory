class CompanyBlueprint < ApplicationBlueprint
  fields :name,
         :slug,
         :created_at,
         :updated_at

  view :counts do
    field :counts do |company|
      {
        locations: company.locations.count,
        items: company.items.count,
        accessories: company.accessories.count,
        consumables: company.consumables.count,
        components: company.components.count,
        departments: company.departments.count,
        licenses: company.licenses.count,
        contracts: company.contracts.count,
        people: company.people.count,
        vendors: company.vendors.count,
        manufacturers: company.manufacturers.count,
      }
    end
  end

  view :associations do
    # association :contact
  end
end
