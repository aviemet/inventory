class Settings::TicketsController < ApplicationController

  # @route GET /settings/tickets (settings_tickets)
  def index
    render inertia: "Settings/Tickets/Index"
  end

  # @route GET /settings/tickets/:id (settings_ticket)
  def show
    render inertia: "Settings/Tickets/Show"
  end

  # @route GET /settings/tickets/new (new_settings_ticket)
  def new
    render inertia: "Settings/Tickets/New", props: {
      smtp: Smtp.new.render
    }
  end

  # @route GET /settings/tickets/:id/edit (edit_settings_ticket)
  def edit
    render inertia: "Settings/Tickets/Edit"
  end

  # @route POST /settings/tickets (settings_tickets)
  def create
  end

  # @route PATCH /settings/tickets/:id (settings_ticket)
  # @route PUT /settings/tickets/:id (settings_ticket)
  def update
  end

  # @route DELETE /settings/tickets/:id (settings_ticket)
  def destroy
  end
end
