class Settings::LdapsController < ApplicationController
  expose :ldap

  # @route GET /settings/ldap (settings_ldaps)
  def index
    ldap = @active_company&.ldap

    render inertia: "Settings/Ldap/Index", props: {
      ldap: ldap&.render(view: :edit) || Ldap.new.render(view: :form_data)
    }
  end

  # @route POST /settings/ldap (settings_ldaps)
  def create
    ldap.company = @active_company

    if ldap.save
      redirect_to settings_ldaps_path, notice: "LDAP settings successfully saved"
    else
      redirect_to settings_ldaps_path, inertia: {
        errors: ldap.errors
      }
    end
  end

  # @route PATCH /settings/ldap/:id (settings_ldap)
  # @route PUT /settings/ldap/:id (settings_ldap)
  def update
    if ldap.update(ldap_params)
      redirect_to settings_ldaps_path, notice: "LDAP settings successfully saved"
    else
      redirect_to settings_ldaps_path, inertia: {
        errors: ldap.errors
      }
    end
  end

  # PATCH /settings/ldap/:id/sync
  # @route PATCH /settings/ldaps/:id/sync (settings_ldap_sync)
  def sync
    LdapJob.perform_now(ldap)
  end

  # @route DELETE /settings/ldap/:id (settings_ldap)
  def destroy
    ldap.destroy
    redirect_to settings_ldaps_path
  end

  private

  def ldap_params
    params.expect(ldap: [:name, :host, :port, :domain, :username, :password, :tree_base, :user_search, :sync_interval])
  end
end
