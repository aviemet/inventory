class Api::CurrenciesController < Api::ApiController
  # GET api/currencies
  def index
    render json: currencies
  end
end
