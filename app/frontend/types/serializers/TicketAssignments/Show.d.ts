// TypesFromSerializers CacheKey 0a863a05ae9139bc28dd41fb37d21810
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Person from '../Person'
import type Ticket from '../Ticket'

declare global {
  namespace Schema {
    interface TicketAssignmentsShow {
      id: unknown
      created_at: unknown
      person: Person
      ticket: Ticket
      updated_at: unknown
    }
  }
}
