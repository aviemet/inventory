// TypesFromSerializers CacheKey bfd838cfe1b18b29127dad6d95f85c1c
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface NetworksIndex {
      id: number
      address: string
      broadcast: unknown
      created_at: string | Date
      dhcp_end?: string
      dhcp_start?: string
      gateway?: string
      name: string
      notes?: string
      updated_at: string | Date
      vlan_id?: number
    }
  }
}
