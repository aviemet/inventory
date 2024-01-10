class Settings::IntegrationsController < ApplicationController

  # @route GET /settings/integrations (settings_integrations)
  def index
    render inertia: "Settings/Integrations/Index"
  end

  # @route GET /settings/integrations/:id (settings_integration)
  def show
    render inertia: "Settings/Integrations/Show"
  end

  # @route GET /settings/integrations/new (new_settings_integration)
  def new
    render inertia: "Settings/Integrations/New"
  end

  # @route GET /settings/integrations/:id/edit (edit_settings_integration)
  def edit
    render inertia: "Settings/Integrations/Edit"
  end

  # @route POST /settings/integrations (settings_integrations)
  def create
  end

  # @route PATCH /settings/integrations/:id (settings_integration)
  # @route PUT /settings/integrations/:id (settings_integration)
  def update
  end

  # @route DELETE /settings/integrations/:id (settings_integration)
  def destroy
  end
end
