class Settings::MailController < ApplicationController

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
      smtp: Smtp.new.render
    }
  end

  def edit
    render inertia: "Settings/Mail/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
