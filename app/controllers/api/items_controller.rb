class Api::ItemsController < ApplicationController
  def index
    render json: @active_company.items.render(view: :as_options)
  end
end
