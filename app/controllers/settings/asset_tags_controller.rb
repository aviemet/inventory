class Settings::AssetTagsController < ApplicationController

  def index
    render inertia: "Settings/AssetTags/Index"
  end

  def show
    render inertia: "Settings/AssetTags/Show"
  end

  def new
    render inertia: "Settings/AssetTags/New"
  end

  def edit
    render inertia: "Settings/AssetTags/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
