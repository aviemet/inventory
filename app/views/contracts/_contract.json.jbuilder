json.extract! contract, :id, :contract_type_id, :vendor_id, :system, :description, :notes, :created_at, :updated_at
json.url contract_url(contract, format: :json)
