class PagesController < ApplicationController
  # @route GET / (root)
  # @route GET /dashboard (dashboard)
  def dashboard
    activities = PublicActivity::Activity
      .includes(:owner, :trackable, :recipient)
      .order(created_at: :desc)
      .first(10)

    render inertia: "Pages/Dashboard", props: {
      company: @active_company.render(view: :counts),
      activities: Activities::DashboardSerializer.render(activities)
    }
  end

  private

  def settings_params
    params.expect(settings: [:dark_mode])
  end
end
