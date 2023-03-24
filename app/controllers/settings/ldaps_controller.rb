class Settings::LdapsController < ApplicationController
  expose :ldap

  # GET /settings/ldaps
  def index
    render inertia: "Settings/Ldap/Index", props: {
      ldap: -> { @active_company&.ldap&.render(view: :edit) || Ldap.new.render(view: :new) }
    }
  end

  # POST /settings/ldap
  def create
    ldap.company = @active_company

    if ldap.save
      redirect_to settings_ldaps_path, notice: 'LDAP settings successfully saved'
    else
      redirect_to settings_ldaps_path, inertia: {
        errors: ldap.errors
      }
    end
  end

  # PATCH/PUT /settings/ldap/:id
  def update
    if ldap.update(ldap_params)
      redirect_to settings_path(tab: :ldap), notice: 'LDAP settings successfully saved'
    else
      redirect_to settings_path(tab: :ldap), inertia: {
        errors: ldap.errors
      }
    end
  end

  # PATCH /settings/ldap/:id/sync
  def sync
    LdapJob.perform_now(ldap)
  end

  # DELETE /settings/ldap/:id
  def destroy
    ldap.destroy
    redirect_to settings_ldaps_path
  end

  private

  def ldap_params
    params.require(:ldap).permit(:host, :port, :domain, :username, :password, :tree_base, :user_search, :sync_interval)
  end
end
