class SettingsController < ApplicationController
  def index
    render inertia: "Settings/Index", props: {
      ldap: InertiaRails.lazy( -> { @active_company&.ldap&.render(view: :edit) || Ldap.new.render(view: :new) })
    }
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
