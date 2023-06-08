class Settings::SmtpsController < ApplicationController
  expose :smtp

  def index
    render inertia: "Settings/Mail/Index", props: {
      smtps: @active_company.smtps.render
    }
  end

  def show
    render inertia: "Settings/Mail/Show"
  end

  def new
    render inertia: "Settings/Mail/New", props: {
      smtp: Smtp.new({ security: 'tls' }).render
    }
  end

  def edit
    render inertia: "Settings/Mail/Edit"
  end

  def create
    smtp.company = @active_company
    if smtp.save
      redirect_to smtp, notice: 'Mail acccount successfully created'
    else
      redirect_to new_settings_mail_path, inertia: { errors: smtp.errors }
    end
  end

  def update
  end

  def destroy
  end

  private

  def smtp_params
    params.require(:smtp).permit(:name, :domain, :port, :security, :auth, :username, :password, :address, :notes)
  end

end
