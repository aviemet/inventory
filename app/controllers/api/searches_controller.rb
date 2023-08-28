class Api::SearchesController < Api::ApiController
  # GET api/searches
  def index
    ap({ params: })
    render json: SearchSerializer.many(
      PgSearch.multisearch(params[:search])
        .order(:searchable_type, :content),
    )
  end

end
