class Api::SearchesController < Api::ApiController
  # GET api/documentations
  def index
    render json: SearchSerializer.many(
      PgSearch.multisearch(params[:search])
        .order(:searchable_type, :content),
    )
  end

  # GET api/documentations/:id
  def show
    render json: item.render
  end
end
