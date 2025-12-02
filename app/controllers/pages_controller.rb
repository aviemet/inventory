class PagesController < ApplicationController
  strong_params :settings, [:dark_mode]

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
end
