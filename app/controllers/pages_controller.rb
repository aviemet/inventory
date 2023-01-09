class PagesController < ApplicationController
  def dashboard
    render inertia: "Pages/Dashboard", props: {
      company: @active_company.render(view: :counts),
<<<<<<< HEAD
      activities: ActivityBlueprint.render_as_json(PublicActivity::Activity.last(10), view: :dashboard)
=======
      activities: ActivityBlueprint.render_as_json(PublicActivity::Activity.includes(:owner, :trackable, :recipient).last(10), view: :dashboard)
>>>>>>> dev
    }
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
