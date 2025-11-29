class TicketsController < ApplicationController

  expose :tickets, -> { search(@active_company.tickets.includes_associated.all) }
  expose :ticket, scope: -> { @active_company.tickets }, find: ->(id, scope){ scope.includes_associated.find(id) }

  strong_params :ticket, permit: [:subject, :description, :status, :messages, :primary_contact_id, :asset_id, assignments_attributes: [:person_id]]

  sortable_fields %w(subject created_by.name)

  # @route GET /tickets (tickets)
  def index
    authorize tickets
    paginated_tickets = tickets.page(params[:page] || 1).per(current_user.limit(:tickets))

    render inertia: "Tickets/Index", props: {
      tickets: -> { paginated_tickets.render(view: :index) },
      pagination: -> { {
        count: tickets.count,
        **pagination_data(paginated_tickets)
      } }
    }
  end

  # @route GET /tickets/:id (ticket)
  def show
    authorize ticket
    render inertia: "Tickets/Show", props: {
      ticket: ticket.render(view: :show)
    }
  end

  # @route GET /tickets/new (new_ticket)
  def new
    authorize Ticket
    render inertia: "Tickets/New", props: {
      ticket: Ticket.new.render(view: :form_data),
      people: @active_company.people.joins(:user).render(view: :options),
      assets: @active_company.assets.render(view: :options),
      # locations: @active_company.locations.render(view: :options),
    }
  end

  # @route GET /tickets/:id/edit (edit_ticket)
  def edit
    authorize ticket
    render inertia: "Tickets/Edit", props: {
      ticket: ticket.render(view: :edit),
      people: @active_company.people.joins(:user).render(view: :options),
      assets: @active_company.assets.render(view: :options),
      # locations: @active_company.locations.render(view: :options),
    }
  end

  # @route POST /tickets (tickets)
  def create
    authorize Ticket
    ticket.company = @active_company
    if ticket.save
      redirect_to ticket, notice: "Ticket was successfully created"
    else
      redirect_to new_ticket_path, inertia: { errors: ticket.errors }
    end
  end

  # @route PATCH /tickets/:id (ticket)
  # @route PUT /tickets/:id (ticket)
  def update
    authorize ticket
    if ticket.update(ticket_params)
      redirect_to ticket, notice: "Ticket was successfully updated"
    else
      redirect_to edit_ticket_path, inertia: { errors: ticket.errors }
    end
  end

  # @route DELETE /tickets/:id (ticket)
  def destroy
    authorize ticket
    ticket.destroy
    redirect_to tickets_url, notice: "Ticket was successfully destroyed."
  end
end
