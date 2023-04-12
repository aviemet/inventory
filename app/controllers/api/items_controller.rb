class Api::ItemsController < ApplicationController
  def index
    render json: @active_company.items.render(view: :options)
  end

  def update
    if location.update(location_params)
      render json: location.render, status: 201
    else
      render json: { errors: location.errors }, status: 303
    end
  end
end
