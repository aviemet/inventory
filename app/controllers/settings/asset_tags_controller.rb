class Settings::AssetTagsController < ApplicationController

  # @route GET /settings/asset_tags (settings_asset_tags)
  def index
    render inertia: "Settings/AssetTags/Index"
  end

  # @route GET /settings/asset_tags/:id (settings_asset_tag)
  def show
    render inertia: "Settings/AssetTags/Show"
  end

  # @route GET /settings/asset_tags/new (new_settings_asset_tag)
  def new
    render inertia: "Settings/AssetTags/New"
  end

  # @route GET /settings/asset_tags/:id/edit (edit_settings_asset_tag)
  def edit
    render inertia: "Settings/AssetTags/Edit"
  end

  # @route POST /settings/asset_tags (settings_asset_tags)
  def create
  end

  # @route PATCH /settings/asset_tags/:id (settings_asset_tag)
  # @route PUT /settings/asset_tags/:id (settings_asset_tag)
  def update
  end

  # @route DELETE /settings/asset_tags/:id (settings_asset_tag)
  def destroy
  end
end
