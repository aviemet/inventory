class PagesController < ApplicationController
  def dashboard
    render inertia: "Pages/Dashboard", props: {
      company: @active_company.render(view: :counts),
      audits: AuditBlueprint.render_as_json(Audited::Audit.last(10), view: :dashboard)
    }
  end

  def first_run
    render inertia: "Public/Pages/FirstRun"
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
