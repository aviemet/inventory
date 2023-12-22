class Api::PeopleController < Api::ApiController
  expose :people, -> { @active_company.people }
  expose :person, id: ->{ params[:slug] }, scope: ->{ @active_company.people.includes_associated }, find_by: :slug

  # GET api/people/options
  def index
    render json: people.includes_associated.render
  end

  # GET api/people/:slug
  def show
    render json: person.render
  end

  # GET api/options/people
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
