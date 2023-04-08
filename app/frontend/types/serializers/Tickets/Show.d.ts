// TypesFromSerializers CacheKey 45c747fa838a59772652935930a7818b
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Asset } from '../Asset'
import type { Person } from '../Person'
import type { TicketMessage } from '../TicketMessage'
import type { TicketStatus } from '../TicketStatus'

declare export global {
	declare namespace Schema {
		export interface TicketsShow {
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
