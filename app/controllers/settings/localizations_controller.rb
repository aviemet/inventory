class Settings::LocalizationsController < ApplicationController
  # @route GET /settings/localizations (settings_localizations)
  def index
    render inertia: "Settings/Localization/Index"
  end

  # @route GET /settings/localizations/:id (settings_localization)
  def show
    render inertia: "Settings/Localization/Show"
  end

  # @route GET /settings/localizations/new (new_settings_localization)
  def new
    render inertia: "Settings/Localization/New"
  end

  # @route GET /settings/localizations/:id/edit (edit_settings_localization)
  def edit
    render inertia: "Settings/Localization/Edit"
  end

  # @route POST /settings/localizations (settings_localizations)
  def create
  end

  # @route PATCH /settings/localizations/:id (settings_localization)
  # @route PUT /settings/localizations/:id (settings_localization)
  def update
  end

  # @route DELETE /settings/localizations/:id (settings_localization)
  def destroy
  end
end
