class Licenses::FormDataSerializer < Assignable::QuantitySerializer
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
  )

  type :number
  def cost
    currency_for(license)
  end

  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer, optional: true
  belongs_to :category, serializer: Categories::OptionsSerializer, optional: true
end
