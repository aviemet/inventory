class SettingsController < ApplicationController
  def index
    render inertia: "Settings/Index"
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
