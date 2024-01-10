class Settings::BarcodesController < ApplicationController

  # @route GET /settings/barcodes (settings_barcodes)
  def index
    render inertia: "Settings/Barcodes/Index"
  end

  # @route GET /settings/barcodes/:id (settings_barcode)
  def show
    render inertia: "Settings/Barcodes/Show"
  end

  # @route GET /settings/barcodes/new (new_settings_barcode)
  def new
    render inertia: "Settings/Barcodes/New"
  end

  # @route GET /settings/barcodes/:id/edit (edit_settings_barcode)
  def edit
    render inertia: "Settings/Barcodes/Edit"
  end

  # @route POST /settings/barcodes (settings_barcodes)
  def create
  end

  # @route PATCH /settings/barcodes/:id (settings_barcode)
  # @route PUT /settings/barcodes/:id (settings_barcode)
  def update
  end

  # @route DELETE /settings/barcodes/:id (settings_barcode)
  def destroy
  end
end
