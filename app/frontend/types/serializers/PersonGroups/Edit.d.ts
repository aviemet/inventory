// TypesFromSerializers CacheKey 09188c1f553e79bf527be18773dc0002
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface PersonGroupsEdit {
      id: number
      description?: string
      name: string
      permissions: {
    [key: string]: Record<string, boolean>
  }
      slug: string
    }
  }
}
