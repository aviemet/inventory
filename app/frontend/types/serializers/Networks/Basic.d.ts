// TypesFromSerializers CacheKey a456c883f8017dcd11acf96cb7ff81f3
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface NetworksBasic {
      id: number
      address: string
      broadcast: string
      created_at: string | Date
      dhcp_end: string
      dhcp_start: string
      gateway: string
      hosts: string[]
      name: string
      notes?: string
      page: number
      updated_at: string | Date
      vlan_id?: number
    }
  }
}
