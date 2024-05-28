class Api::CurrenciesController < Api::ApiController
  # @route GET /api/currencies (api_currencies)
  def index
    render json: currencies
  end
end
