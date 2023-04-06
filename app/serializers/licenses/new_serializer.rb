class Licenses::NewSerializer < Assignable::QuantitySerializer
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

  attribute :cost do
    currency_for(license)
  end
end
