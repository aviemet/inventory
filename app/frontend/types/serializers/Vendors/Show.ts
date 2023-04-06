// TypesFromSerializers CacheKey 1f8c50253f27f039348f54fee96c306f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Accessory from '../Accessory'
import type Activity from '../Activity'
import type Component from '../Component'
import type Consumable from '../Consumable'
import type Contact from '../Contact'
import type Contract from '../Contract'
import type Item from '../Item'

export default interface VendorsShow {
  id: number
  slug?: string
  accessories: Accessory[]
  accessoriesCount: unknown
  activities: Activity[]
  components: Component[]
  componentsCount: unknown
  consumables: Consumable[]
  consumablesCount: unknown
  contact: Contact
  contracts: Contract[]
  contractsCount: unknown
  createdAt: string | Date
  items: Item[]
  itemsCount: unknown
  licensesCount: unknown
  name: string
  updatedAt: string | Date
  url?: string
}

