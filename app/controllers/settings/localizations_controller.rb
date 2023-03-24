class Settings::LocalizationsController < ApplicationController

  def index
    render inertia: "Settings::Localizations/Index"
  end

  def show
    render inertia: "Settings::Localizations/Show"
  end

  def new
    render inertia: "Settings::Localizations/New"
  end

  def edit
    render inertia: "Settings::Localizations/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
