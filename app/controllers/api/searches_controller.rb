class Api::SearchesController < Api::ApiController

  # @route GET /api/searches (api_searches)
  def index
    results = PgSearch.multisearch(params[:search])
      .order(:searchable_type, :content)

    render json: SearchSerializer.many(results)
  end

end
