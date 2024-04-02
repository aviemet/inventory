class Settings::GeneralController < ApplicationController

  # @route GET /settings/general (settings_general_index)
  def index
    render inertia: "Settings/General/Index"
  end

  # @route GET /settings/general/:id (settings_general)
  def show
    render inertia: "Settings/General/Show"
  end

  # @route GET /settings/general/new (new_settings_general)
  def new
    render inertia: "Settings/General/New"
  end

  # @route GET /settings/general/:id/edit (edit_settings_general)
  def edit
    render inertia: "Settings/General/Edit"
  end

  # @route POST /settings/general (settings_general_index)
  def create
  end

  # @route PATCH /settings/general/:id (settings_general)
  # @route PUT /settings/general/:id (settings_general)
  def update
  end

  # @route DELETE /settings/general/:id (settings_general)
  def destroy
  end
end
