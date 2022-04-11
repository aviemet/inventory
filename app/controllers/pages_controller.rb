class PagesController < ApplicationController

  def dashboard
    render inertia: "Dashboard"
  end

  def settings
    render inertia: "Settings"
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
