// TypesFromSerializers CacheKey f0786f4dd1e4cfdfeaaa6b7ffcecced8
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { TicketAssignmentsNew } from '../TicketAssignments/New'
import type { TicketStatusesNew } from '../TicketStatuses/New'

declare global {
	 declare namespace Schema {
		export interface TicketsNew {
			id?: number
			assetId?: number
			assignments: TicketAssignmentsNew[]
			description?: string
			primaryContactId?: number
			status: TicketStatusesNew
			subject: string
		}

	}
}
