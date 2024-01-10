class Settings::BackupsController < ApplicationController

  # @route GET /settings/backups (settings_backups)
  def index
    render inertia: "Settings/Backups/Index"
  end

  # @route GET /settings/backups/:id (settings_backup)
  def show
    render inertia: "Settings/Backups/Show"
  end

  # @route GET /settings/backups/new (new_settings_backup)
  def new
    render inertia: "Settings/Backups/New"
  end

  # @route GET /settings/backups/:id/edit (edit_settings_backup)
  def edit
    render inertia: "Settings/Backups/Edit"
  end

  # @route POST /settings/backups (settings_backups)
  def create
  end

  # @route PATCH /settings/backups/:id (settings_backup)
  # @route PUT /settings/backups/:id (settings_backup)
  def update
  end

  # @route DELETE /settings/backups/:id (settings_backup)
  def destroy
  end
end
