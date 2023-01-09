class TicketsController < ApplicationController
  include Searchable

  expose :tickets, -> { search(Ticket.all, sortable_fields) }
  expose :ticket

  # GET /tickets
  def index
    paginated_tickets = tickets.page(params[:page] || 1)

    render inertia: "Tickets/Index", props: {
      tickets: -> { paginated_tickets.render },
      pagination: -> { {
        count: tickets.count,
        **pagination_data(paginated_tickets)
      } }
    }
  end

  # GET /tickets/:id
  def show
    render inertia: "Tickets/Show", props: {
      ticket: ticket.render(view: :associations)
    }
  end

  # GET /tickets/new
  def new
    render inertia: "Tickets/New", props: {
      ticket: Ticket.new.render(view: :new),
      people: @active_company.people.joins(:user).render(view: :as_options),
      assets: @active_company.assets.render(view: :as_options),
      locations: @active_company.locations.render(view: :as_options),
    }
  end

  # GET /tickets/:id/edit
  def edit
    render inertia: "Tickets/Edit", props: {
      ticket: ticket.render(view: :edit),
      people: @active_company.people.joins(:user).render(view: :as_options),
      assets: @active_company.assets.render(view: :as_options),
      locations: @active_company.locations.render(view: :as_options),
    }
  end

  # POST /tickets
  def create
    if ticket.save
      redirect_to ticket, notice: 'Ticket was successfully created'
    else
      redirect_to new_ticket_path, inertia: { errors: ticket.errors }
    end
  end

  # PATCH/PUT /tickets/:id
  def update
    if ticket.update(ticket_params)
      redirect_to ticket, notice: 'Ticket was successfully updated'
    else
      redirect_to edit_ticket_path, inertia: { errors: ticket.errors }
    end
  end

  # DELETE /tickets/:id
  def destroy
    ticket.destroy
    redirect_to tickets_url, notice: "Ticket was successfully destroyed."
  end

  private
  
  def sortable_fields
    %w(subject created_by.name).freeze
  end

  def ticket_params
    params.require(:ticket).permit(:subject, :description, :status, :messages, :primary_contact_id, assignments_attributes: [:person_id])
  end
end
