class TicketsController < ApplicationController
  include Searchable

  expose :tickets, -> { Ticket.all }
  expose :ticket

  # GET /tickets
  def index
    self.tickets = search(tickets, sortable_fields)
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
      ticket: -> { ticket.render }
    }
  end

  # GET /tickets/new
  def new
    render inertia: "Tickets/New", props: {
      ticket: Ticket.new.render(view: :new)
    }
  end

  # GET /tickets/:id/edit
  def edit
    render inertia: "Tickets/Edit", props: {
      ticket: ticket.render(view: :edit),
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

    # Only allow a list of trusted parameters through.
    def ticket_params
      params.require(:ticket).permit(:subject, :description, :created_by_id)
    end
end
