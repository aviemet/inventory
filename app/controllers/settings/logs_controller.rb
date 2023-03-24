class Settings::LogsController < ApplicationController

  def index
    render inertia: "Settings::Logs/Index"
  end

  def show
    render inertia: "Settings::Logs/Show"
  end

  def new
    render inertia: "Settings::Logs/New"
  end

  def edit
    render inertia: "Settings::Logs/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
