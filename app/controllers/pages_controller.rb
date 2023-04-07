class PagesController < ApplicationController
  def dashboard
    render inertia: "Pages/Dashboard", props: {
      company: @active_company.render(view: :show),
      activities: ActivityBlueprint.render_as_json(PublicActivity::Activity.includes(:owner, :trackable, :recipient).order(created_at: :asc).last(10), view: :dashboard)
    }
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
