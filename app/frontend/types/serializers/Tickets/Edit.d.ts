// TypesFromSerializers CacheKey 53d8c295031c743316945420eb0a9b03
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { TicketAssignmentsEdit } from '../TicketAssignments/Edit'

declare export global {
	declare namespace Schema {
		export interface TicketsEdit {
			id?: number
			asset_id?: number
			assignments: TicketAssignmentsEdit[]
			description?: string
			primary_contact_id?: number
			subject: string
		}

	}
}
