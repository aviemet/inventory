class LdapsController < ApplicationController
  expose :ldaps, -> { @active_company.ldaps }
  expose :ldap, -> { @active_company.ldaps.find(params[:id]) || Ldap.new(ldap_params) }

  # GET /ldaps
  def index
    render inertia: "Ldap/Index", props: {
      ldaps: ldaps.render
    }
  end

  # GET /ldaps/:id
  def show
    render inertia: "Ldap/Show", props: {
      ldap: ldap.render
    }
  end

  # GET /ldaps/new
  def edit
    render inertia: "Ldap/Edit", props: {
      ldap: ldap.render
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

  # PATCH /ldap/:id/sync
  def sync
    LdapJob.perform_now(ldap)
  end

  private

  def ldap_params
    params.require(:ldap).permit(:host, :port, :domain, :username, :password, :tree_base, :user_search, :sync_interval)
  end
end
