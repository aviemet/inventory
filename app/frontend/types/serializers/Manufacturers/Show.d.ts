// TypesFromSerializers CacheKey 6b5453804ab20dcfe6dc6eb907831d75
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Contact } from '../Contact'

declare global {
	 declare namespace Schema {
		export interface ManufacturersShow {
			id: number
			slug?: string
			accessoriesCount: unknown
			componentsCount: unknown
			consumablesCount: unknown
			contact: Contact
			createdAt: string | Date
			itemsCount: unknown
			name?: string
			updatedAt: string | Date
		}

	}
}
