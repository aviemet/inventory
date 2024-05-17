# == Schema Information
#
# Table name: ticket_assignments
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  person_id  :bigint           not null
#  ticket_id  :bigint           not null
#
# Indexes
#
#  index_ticket_assignments_on_person_id  (person_id)
#  index_ticket_assignments_on_ticket_id  (ticket_id)
#
# Foreign Keys
#
#  fk_rails_...  (person_id => people.id)
#  fk_rails_...  (ticket_id => tickets.id)
#
class TicketAssignment < ApplicationRecord
  tracked
  resourcify

  belongs_to :person
  belongs_to :ticket
end
