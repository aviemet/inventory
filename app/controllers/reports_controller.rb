class ReportsController < ApplicationController
  def index
    render inertia: "Reports/Index"
  end
end
