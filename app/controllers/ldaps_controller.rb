class LdapsController < ApplicationController
  expose :ldap, -> { @active_company.ldap || Ldap.new(ldap_params) }

  # GET /ldap/:id
  def show
    render inertia: "Ldap/Show", props: {
      ldap: -> { LdapBlueprint.render_as_json(ldap) }
    }
  end

  # POST /ldap
  def create
    ldap.company = @active_company

    if ldap.save
      redirect_to ldap, notice: 'LDAP settings successfully saved'
    else
      redirect_to settings_path, inertia: { errors: ldap.errors }
    end
  end

  # PATCH/PUT /ldap/:id
  def update
    if ldap.update(ldap_params)
      redirect_to ldap, notice: 'LDAP settings successfully saved'
    else
      redirect_to settings_path, inertia: { errors: ldap.errors }
    end
  end

  private

  def ldap_params
    params.require(:ldap).permit(:host, :port, :username, :password, :tree_base, :user_search, :sync_interval)
  end
end
