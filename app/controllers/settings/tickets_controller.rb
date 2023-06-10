class Settings::TicketsController < ApplicationController

  def index
    render inertia: "Settings/Tickets/Index"
  end

  def show
    render inertia: "Settings/Tickets/Show"
  end

  def new
    render inertia: "Settings/Tickets/New", props: {
      smtp: Smtp.new.render
    }
  end

  def edit
    render inertia: "Settings/Tickets/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
