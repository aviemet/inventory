// TypesFromSerializers CacheKey 6a6e5b143267e963faac50d20f2f7080
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { TicketAssignmentsNew } from '../TicketAssignments/New'
import type { TicketStatusesNew } from '../TicketStatuses/New'

declare export global {
	declare namespace Schema {
		export interface TicketsNew {
			id?: number
			asset_id?: number
			assignments: TicketAssignmentsNew[]
			description?: string
			primary_contact_id?: number
			status: TicketStatusesNew
			subject: string
		}

	}
}
