module ApiHelper
  def json_headers
    {
      "Content-Type" => "application/json",
      "Accept" => "application/json"
    }
  end
end

RSpec.configure do |config|
  config.include ApiHelper, type: :request
end
