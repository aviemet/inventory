// TypesFromSerializers CacheKey 44dce23008b76285ce25664ac0ee7c4f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type TicketStatus from '../TicketStatus'

declare global {
  namespace Schema {
    interface TicketsBasic {
      id: number
      asset_id?: number
      created_at: string | Date
      created_by_id?: number
      description?: string
      number: number
      primary_contact_id?: number
      priority?: number
      status: TicketStatus
      status_id?: number
      subject: string
      updated_at: string | Date
    }
  }
}