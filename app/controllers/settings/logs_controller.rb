class Settings::LogsController < ApplicationController

  # @route GET /settings/logs (settings_logs)
  def index
    render inertia: "Settings/Logs/Index"
  end

  # @route GET /settings/logs/:id (settings_log)
  def show
    render inertia: "Settings/Logs/Show"
  end

  # @route GET /settings/logs/new (new_settings_log)
  def new
    render inertia: "Settings/Logs/New"
  end

  # @route GET /settings/logs/:id/edit (edit_settings_log)
  def edit
    render inertia: "Settings/Logs/Edit"
  end

  # @route POST /settings/logs (settings_logs)
  def create
  end

  # @route PATCH /settings/logs/:id (settings_log)
  # @route PUT /settings/logs/:id (settings_log)
  def update
  end

  # @route DELETE /settings/logs/:id (settings_log)
  def destroy
  end
end
