class Settings::SmtpsController < ApplicationController
  expose :smtps, -> { @active_company.smtps }
  expose :smtp

  # @route GET /settings/mail (settings_smtps)
  def index
    render inertia: "Settings/Mail/Index", props: {
      smtps: smtps.render
    }
  end

  # @route GET /settings/mail/:id (settings_smtp)
  def show
    render inertia: "Settings/Mail/Show", props: {
      smtp: smtp.render
    }
  end

  # @route GET /settings/mail/new (new_settings_smtp)
  def new
    render inertia: "Settings/Mail/New", props: {
      smtp: Smtp.new({ security: "tls" }).render(view: :form_data)
    }
  end

  # @route GET /settings/mail/:id/edit (edit_settings_smtp)
  def edit
    render inertia: "Settings/Mail/Edit", props: {
      smtp: smtp.render(view: :form_data)
    }
  end

  # @route POST /settings/mail (settings_smtps)
  def create
    smtp.company = @active_company
    if smtp.save
      redirect_to settings_smtp_url(smtp), notice: "Mail acccount successfully created"
    else
      redirect_to new_settings_mail_path, inertia: { errors: smtp.errors }
    end
  end

  # PUT /settings/mail/:id
  # @route PATCH /settings/mail/:id (settings_smtp)
  # @route PUT /settings/mail/:id (settings_smtp)
  def update
    if smtp.update(smtp_params)
      redirect_to settings_smtp_url(smtp), notice: "Mail acccount successfully updated"
    else
      redirect_to edit_settings_mail_path, inertia: { errors: smtp.errors }
    end
  end

  # @route DELETE /settings/mail/:id (settings_smtp)
  def destroy
  end

  private

  def smtp_params
    params.expect(smtp: [:name, :host, :domain, :port, :security, :username, :password, :address, :notes])
  end

end
