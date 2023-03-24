class Settings::LdapsController < ApplicationController
  expose :ldap

  def index
    render inertia: "Settings/Ldap/Index", props: {
      ldap: -> { ldap.render }
    }
  end

  def show
    render inertia: "Settings/Ldap/Show"
  end

  def new
    render inertia: "Settings/Ldap/New"
  end

  def edit
    render inertia: "Settings/Ldap/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
