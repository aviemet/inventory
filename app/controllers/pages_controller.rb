class PagesController < ApplicationController

  def dashboard
    render inertia: "Dashboard", props: {
      company: CompanyBlueprint.render_as_json(@active_company, view: :counts),
      people: PersonBlueprint.render_as_json(Person.all),
    }
  end

  def settings
    render inertia: "Settings"
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
