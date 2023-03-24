class SettingsController < ApplicationController

  def general
    render inertia: "Settings/General"
  end

  def appearance
    render inertia: "Settings/Appearance"
  end

  def localizations
    render inertia: "Settings/Localizations"
  end

  def notifications
    render inertia: "Settings/Notifications"
  end

  def integrations
    render inertia: "Settings/Integrations"
  end

  def asset_tags
    render inertia: "Settings/AssetTags"
  end

  def barcodes
    render inertia: "Settings/Barcodes"
  end

  def ldap
    render inertia: "Settings/Ldap", props: {
      ldap: -> { @active_company&.ldap&.render(view: :edit) || Ldap.new.render(view: :new) }
    }
  end

  def backups
    render inertia: "Settings/Backups"
  end

  def logs
    render inertia: "Settings/Logs"
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
