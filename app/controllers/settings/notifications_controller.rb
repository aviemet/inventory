class Settings::NotificationsController < ApplicationController

  # @route GET /settings/notifications (settings_notifications)
  def index
    render inertia: "Settings/Notifications/Index"
  end

  # @route GET /settings/notifications/:id (settings_notification)
  def show
    render inertia: "Settings/Notifications/Show"
  end

  # @route GET /settings/notifications/new (new_settings_notification)
  def new
    render inertia: "Settings/Notifications/New"
  end

  # @route GET /settings/notifications/:id/edit (edit_settings_notification)
  def edit
    render inertia: "Settings/Notifications/Edit"
  end

  # @route POST /settings/notifications (settings_notifications)
  def create
  end

  # @route PATCH /settings/notifications/:id (settings_notification)
  # @route PUT /settings/notifications/:id (settings_notification)
  def update
  end

  # @route DELETE /settings/notifications/:id (settings_notification)
  def destroy
  end
end
