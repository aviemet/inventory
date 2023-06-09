require 'net/smtp'

class Api::SmtpsController < Api::ApiController
  expose :smtp

  # GET /api/smtp/test
  # GET /api/smtp/:id/test
  def test
    if !params[:id]
      smtp = Smtp.new(smtp_params)
    end
    render json: test_smtp_auth(smtp), status: 200
  end

  def test_smtp_auth(smtp)
    Net::SMTP.start(smtp.host, smtp.port, smtp.domain, smtp.username, smtp.password) do |_smtp|
      # Authentication successful
      { success: true, message: 'Authentication successful' }
    end
  rescue Net::SMTPAuthenticationError => e
    # Authentication failed
    { success: false, message: "Authentication failed: #{e.message}" }
  rescue StandardError => e
    # Other errors
    { success: false, message: "An error occurred: #{e.message}" }
  end

  private

  def smtp_params
    params.require(:smtp).permit(:name, :host, :domain, :port, :security, :username, :password, :address, :notes)
  end
end
