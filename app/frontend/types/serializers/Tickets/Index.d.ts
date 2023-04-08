// TypesFromSerializers CacheKey 54c04e919b6e46ef7a3a3373c1a1d9a0
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Asset } from '../Asset'
import type { Person } from '../Person'
import type { TicketMessage } from '../TicketMessage'
import type { TicketStatus } from '../TicketStatus'

declare export global {
	declare namespace Schema {
		export interface TicketsIndex {
			id?: number
			asset: Asset
			asset_id?: number
			assignees: Person[]
			created_at: string | Date
			created_by: Person
			description?: string
			messages: TicketMessage[]
			primary_contact: Person
			primary_contact_id?: number
			status: TicketStatus
			subject: string
			updated_at: string | Date
		}

	}
}
