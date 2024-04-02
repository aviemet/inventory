class Api::PeopleController < Api::ApiController
  expose :people, -> { @active_company.people }
  expose :person, id: ->{ params[:slug] }, scope: ->{ @active_company.people.includes_associated }, find_by: :slug

  # GET api/people/options
  # @route GET /api/people (api_people)
  def index
    render json: people.includes_associated.render
  end

  # GET api/people/:slug
  # @route GET /api/people/:id (api_person)
  def show
    render json: person.render
  end

  # GET api/options/people
  # @route GET /api/options/people (api_people_options)
  def options
    render json: people.render(view: :options)
  end

  # POST api/people
  def create
    person.company = @active_company

    if person.save
      render json: person.render, status: :created
    else
      render json: { errors: person.errors }, status: :see_other
    end
  end

  # PATCH/PUT api/people/:id
  # @route PATCH /api/people/:id (api_person)
  # @route PUT /api/people/:id (api_person)
  def update
    if person.update(person_params)
      render json: person.render, status: :created
    else
      render json: { errors: person.errors }, status: :see_other
    end
  end

  private

  def person_params
    params.require(:person).permit(:name, :url)
  end
end
