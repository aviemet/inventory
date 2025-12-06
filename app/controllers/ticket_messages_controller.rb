class TicketMessagesController < ApplicationController
  expose :ticket
  expose :ticket_messages, from: :ticket
  expose :ticket_message

  strong_params :ticket_message, [:body, :parent_id]

  # @route POST /tickets/:ticket_id/messages (ticket_messages)
  def create
    ticket_message.created_by = current_user.person
    ticket_message.ticket = ticket
    if ticket_message.save
      redirect_to ticket, notice: "Message was successfully created"
    else
      redirect_to ticket, inertia: { errors: ticket_message.errors }
    end
  end

  # @route PATCH /tickets/:ticket_id/messages/:id (ticket_message)
  # @route PUT /tickets/:ticket_id/messages/:id (ticket_message)
  def update
    if ticket_message.update(ticket_message_params)
      redirect_to ticket, notice: "Message was successfully updated"
    else
      redirect_to ticket, inertia: { errors: ticket.errors }
    end
  end

  # @route DELETE /tickets/:ticket_id/messages/:id (ticket_message)
  def destroy
    ticket_message.destroy
    redirect_to ticket, notice: "Message was successfully destroyed."
  end
end
