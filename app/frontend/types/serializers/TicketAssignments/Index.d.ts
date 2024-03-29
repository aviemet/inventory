// TypesFromSerializers CacheKey 98c87f40ac138341047739a3c09661ef
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Person from '../Person'
import type Ticket from '../Ticket'

declare global {
  namespace Schema {
    interface TicketAssignmentsIndex {
      id?: number
      created_at: string | Date
      person: Person
      person_id: number
      ticket: Ticket
      ticket_id: number
      updated_at: string | Date
    }
  }
}
