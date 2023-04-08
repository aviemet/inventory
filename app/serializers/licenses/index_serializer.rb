class Licenses::IndexSerializer < Assignable::QuantitySerializer
  object_as :license

  attributes(
     :name,
     :qty,
     :key,
     :licenser_name,
     :licenser_email,
     :reassignable,
     :cost_currency,
     :purchased_at,
     :expires_at,
     :terminates_at,
     :maintained,
     :notes,
     :category_id,
     :vendor_id,
     :manufacturer_id,
     :created_at,
     :updated_at,
   )

  type :number
  def cost
    currency_for(license)
  end

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
end
