class Settings::BarcodesController < ApplicationController

  def index
    render inertia: "Settings::Barcodes/Index"
  end

  def show
    render inertia: "Settings::Barcodes/Show"
  end

  def new
    render inertia: "Settings::Barcodes/New"
  end

  def edit
    render inertia: "Settings::Barcodes/Edit"
  end

  def create
  end

  def update
  end

  def destroy
  end
end
