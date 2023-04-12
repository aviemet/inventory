// TypesFromSerializers CacheKey 2b95c80d9bbdf1425d7c9adf55013af5
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Asset } from '../Asset'
import type { Person } from '../Person'
import type { TicketMessage } from '../TicketMessage'
import type { TicketStatus } from '../TicketStatus'

declare export global {
	declare namespace Schema {
		export interface TicketsIndex {
			id: number
			asset: Asset
			asset_id?: number
			assignees: Person[]
			created_at: string | Date
			created_by: Person
			description?: string
			messages: TicketMessage[]
			number: number
			primary_contact: Person
			primary_contact_id?: number
			status: TicketStatus
			subject: string
			updated_at: string | Date
		}

	}
}
