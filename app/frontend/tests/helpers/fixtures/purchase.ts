import { createSchemaMoneyFixture } from "./schemaMoney"

export const basePurchaseFixture: Schema.Purchase = {
	id: 1,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
	purchasable_id: 1,
	purchasable_type: "Item",
}

export const createPurchaseFixture = (overrides?: Partial<Schema.Purchase>): Schema.Purchase => ({
	...basePurchaseFixture,
	...overrides,
})

export const minimalPurchaseFixture: Schema.Purchase = {
	id: 1,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
	purchasable_id: 1,
	purchasable_type: "Item",
}
