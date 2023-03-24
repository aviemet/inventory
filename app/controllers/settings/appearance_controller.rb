class Settings::AppearanceController < ApplicationController
  def index
    render inertia: "Settings/Appearance/Index"
  end

  def show
    render inertia: "Settings/Appearance/Show"
  end

  def new
    render inertia: "Settings/Appearance/New"
  end

  def edit
    render inertia: "Settings/Appearance/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
