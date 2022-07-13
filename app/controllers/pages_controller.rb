class PagesController < ApplicationController
  expose :ldap, -> { @active_company.ldap || Ldap.new({
    host: '127.0.0.1',
    port: 389,
  }) }

  def dashboard
    render inertia: "Dashboard", props: {
      company: CompanyBlueprint.render_as_json(@active_company, view: :counts),
      people: PersonBlueprint.render_as_json(Person.all),
    }
  end

  def settings
    render inertia: "Settings", props: {
      ldap: LdapBlueprint.render_as_json(ldap, view: :new)
    }
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
