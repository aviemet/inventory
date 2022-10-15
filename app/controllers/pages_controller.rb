class PagesController < ApplicationController
  def dashboard
    render inertia: "Dashboard", props: {
      company: @active_company.render(view: :counts),
      audits: AuditBlueprint.render_as_json(Audited::Audit.last(10), view: :dashboard)
    }
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
