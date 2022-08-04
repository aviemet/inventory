require "uri"
require "net/http"
require "json"

class TrustifiMail
  def initialize(settings)
    @settings = settings
  end

  def deliver!(mail)
    url = URI.parse(ENV['TRUSTIFI_URL'] + "/api/i/v1/email")
    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Post.new(url)
    request["x-trustifi-key"] = ENV['TRUSTIFI_KEY']
    request["x-trustifi-secret"] = ENV['TRUSTIFI_SECRET']
    request["content-type"] = "application/json"
    request.body = {
      recipients: [{ email: mail.to[0] }],
      title: mail.subject,
      html: mail.body.raw_source
    }.to_json

    https.request(request)
  end

  
end
