// TypesFromSerializers CacheKey 6d261cac3a5785dd371e32ee4be874b2
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Person } from '../Person'
import type { Ticket } from '../Ticket'

declare export global {
	declare namespace Schema {
		export interface TicketAssignmentsShow {
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
