class LdapsController < ApplicationController
  expose :ldap, -> { @active_company.ldap }

  # GET /ldaps
  def index
    render inertia: "Ldap/Index", props: {
      ldap: ldap.render
    }
  end

  # GET /ldaps/:id
  def show
    render inertia: "Ldap/Show", props: {
      ldap: ldap.render
    }
  end

  # GET /ldaps/new
  def new
    render inertia: "Ldap/New", props: {
      ldap: Ldap.new.render(view: :new)
    }
  end

  # GET /ldaps/edit
  def edit
    render inertia: "Ldap/Edit", props: {
      ldap: ldap.render(view: :edit)
    }
  end

  # POST /ldap
  def create
    ldap.company = @active_company

    if ldap.save
      redirect_to settings_path(tab: :ldap), notice: 'LDAP settings successfully saved'
    else
      redirect_to settings_path(tab: :ldap), inertia: {
        errors: ldap.errors
      }
    end
  end

  # PATCH/PUT /ldap/:id
  def update
    if ldap.update(ldap_params)
      redirect_to settings_path(tab: :ldap), notice: 'LDAP settings successfully saved'
    else
      redirect_to settings_path(tab: :ldap), inertia: {
        errors: ldap.errors
      }
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
