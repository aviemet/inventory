class PagesController < ApplicationController
  def dashboard
    render inertia: "Dashboard", props: {
      company: @active_company.render(view: :counts),
      people: @active_company.people.render,
    }
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
