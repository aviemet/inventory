json.extract! website, :id, :url, :name, :description, :notes, :created_at, :updated_at
json.url website_url(website, format: :json)
