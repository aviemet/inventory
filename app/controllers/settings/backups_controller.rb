class Settings::BackupsController < ApplicationController

  def index
    render inertia: "Settings::Backups/Index"
  end

  def show
    render inertia: "Settings::Backups/Show"
  end

  def new
    render inertia: "Settings::Backups/New"
  end

  def edit
    render inertia: "Settings::Backups/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
