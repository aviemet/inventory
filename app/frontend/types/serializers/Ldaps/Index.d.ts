// TypesFromSerializers CacheKey c58194cbfbd3df365528433d8229a987
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Company } from '../Company'

declare export global {
	declare namespace Schema {
		export interface LdapsIndex {
			id: number
			company: Company
			created_at: string | Date
			domain?: string
			host?: string
			name: string
			password?: string
			port?: string
			sync_interval?: string
			tree_base?: string
			updated_at: string | Date
			user_search?: string
			username?: string
		}

	}
}
