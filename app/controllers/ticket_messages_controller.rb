class TicketMessagesController < ApplicationController
  expose :ticket
  expose :ticket_messages, from: :ticket
  expose :ticket_message

  # POST /tickets/:ticket_id/messages
  def create
    ticket_message.created_by = current_user.person
    ticket_message.ticket = ticket
    ap({ message: ticket_message, ticket: ticket })
    if ticket_message.save
      ap "Saved"
      redirect_to ticket, notice: 'Message was successfully created'
    else
      ap({ errors: ticket_message.errors })
      redirect_to ticket, inertia: { errors: ticket_message.errors }
    end
  end

  # PATCH/PUT /tickets/:ticket_id/messages/:id
  def update
    if ticket_message.update(ticket_params)
      redirect_to ticket, notice: 'Message was successfully updated'
    else
      redirect_to ticket, inertia: { errors: ticket.errors }
    end
  end

  # DELETE /tickets/:ticket_id/messages/:id
  def destroy
    ticket_message.destroy
    redirect_to ticket, notice: "Message was successfully destroyed."
  end

  private

  def ticket_message_params
    params.require(:ticket_message).permit(:body, :parent_id)
  end
end
